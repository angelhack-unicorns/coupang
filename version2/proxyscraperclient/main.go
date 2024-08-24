package main

import (
	"log"
	"os/exec"
	"strings"

	"github.com/gorilla/websocket"
)

const pythonScriptPath = "/Users/dev/fun/angelhack/coupang/version2/.venv/bin/python3"

type ResponseItem struct {
	Item         string `json:"item"`
	ItemInfoJSON string `json:"item_info_json"`
}

func main() {
	serverAddress := "ws://localhost:8080/ws"
	conn, _, err := websocket.DefaultDialer.Dial(serverAddress, nil)
	if err != nil {
		log.Fatalf("Failed to connect to server: %v", err)
	}
	defer conn.Close()
	log.Println("Connected to server")

	initMessage := []byte("hello")
	err = conn.WriteMessage(websocket.TextMessage, initMessage)
	if err != nil {
		log.Fatalf("Failed to write message: %v", err)
	}
	log.Println("Initiated init")

	for {
		_, message, err := conn.ReadMessage()
		if err != nil {
			log.Println("Read error: ", err)
			continue
		}
		messageString := string(message)
		log.Println("Received message: ", messageString)
		var response []ResponseItem
		listOfItems := strings.Split(messageString, " ")
		for _, item := range listOfItems {
			imageURLs, err := scrapeWithItem(item)
			if err != nil {
				log.Printf("Failed to scrape item: %v", err)
				continue
			}
			newRespnoseItem := ResponseItem{
				Item:         item,
				ItemInfoJSON: imageURLs,
			}
			response = append(response, newRespnoseItem)
		}
		err = conn.WriteJSON(response)
		if err != nil {
			log.Println("Write error: ", err)
			continue
		}
	}
}

func scrapeWithItem(item string) (string, error) {
	cmd := exec.Command(pythonScriptPath, "./coupangscraper.py", item)
	output, err := cmd.Output()
	if err != nil {
		return "", err
	}
	return string(output), nil
}

// func main() {
// 	cmd := exec.Command(pythonScriptPath, "./coupangscraper.py", "socks")
// 	output, err := cmd.Output()
// 	if err != nil {
// 		log.Fatalf("Failed to run command: %v", err)
// 	}
// 	log.Printf("Output: %s", output)
// }
