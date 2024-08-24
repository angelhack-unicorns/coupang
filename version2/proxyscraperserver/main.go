package main

import (
	"io"
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

var conn *websocket.Conn = nil

func handleWebsocket(w http.ResponseWriter, r *http.Request) {
	var err error
	conn, err = upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatalf("Failed to upgrade connection: %v", err)
	}

	log.Println("Client connected")

	_, message, err := conn.ReadMessage()
	if err != nil {
		log.Fatalf("Failed to read message: %v", err)
	}
	if string(message) != "hello" {
		log.Fatalf("Unexpected message: %s", message)
	}
	log.Println("Received init message. Starting...")

	for {
	}
}

func handleRequest(w http.ResponseWriter, r *http.Request) {
	log.Println("Handling request")
	if conn == nil {
		log.Println("conn is nil")
		http.Error(w, "Connection not open", http.StatusServiceUnavailable)
		return
	}
	log.Println("going to read the body")
	requestBody, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Failed to read request body", http.StatusInternalServerError)
		return
	}
	defer r.Body.Close()
	bodyString := string(requestBody)
	log.Println("Handling request: ", bodyString)
	err = conn.WriteMessage(websocket.TextMessage, requestBody)
	if err != nil {
		http.Error(w, "Failed to write message", http.StatusInternalServerError)
		return
	}
	log.Println("Sent message")
	_, message, err := conn.ReadMessage()
	if err != nil {
		http.Error(w, "Failed to read message", http.StatusInternalServerError)
		return
	}
	log.Println("Received message: ", string(message))
	_, err = w.Write(message)
	if err != nil {
		http.Error(w, "Failed to write response", http.StatusInternalServerError)
		return
	}
	log.Println("Sent response")
}

func main() {
	http.HandleFunc("/ws", handleWebsocket)
	http.HandleFunc("/request", handleRequest)
	addr := "localhost:8080"
	log.Printf("Starting server on %s", addr)
	err := http.ListenAndServe(addr, nil)
	if err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
