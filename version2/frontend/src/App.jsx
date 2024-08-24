import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from './firebase';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [promptResponse, setPromptResponse] = useState('');
  const [imagePromptResponse, setImagePromptResponse] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser(user);
        setToken(token);
      } else {
        setUser(null);
        setToken(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log('Error signing in: ', error);
    }
  };

  if (!user) {
    return (
      <div>
        <p>Sign in to upload an image</p>
        <button onClick={handleSignin}>Sign in with Google</button>
      </div>
    );
  }

  if (imagePromptResponse !== '') {
    return <p>done success: {imagePromptResponse}</p>;
  }

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmitPrompt = async () => {
    try {
      const response = await fetch(
        'http://localhost:8000/api/e9dyi1qp04w57b5q98hwmwx8/user-message',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ user_message: prompt }),
        },
      );
      if (response.ok) {
        const fetchedPromptResponse = await response.text();
        setPromptResponse(fetchedPromptResponse);
      } else {
        console.log('Error submitting the prompt');
      }
    } catch (error) {
      console.log('error is: ', error);
    }
  };

  if (!promptResponse) {
    return (
      <div>
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          placeholder="please enter the prompt"
        ></textarea>
        <button onClick={handleSubmitPrompt}>submit prompt</button>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    );
  }

  const handleImageUpload = async () => {
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await fetch(
        'http://localhost:8000/api/e9dyi1qp04w57b5q98hwmwx8/image-upload',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );
      if (response.ok) {
        const fetchedPromptResponse = await response.text();
        setImagePromptResponse(fetchedPromptResponse);
      } else {
        console.log('Error uploading the image');
      }
    } catch (error) {
      console.log('Error uploading the image: ', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleImageChange}
      />
      <p>prompt response: {promptResponse}</p>
      {image && (
        <div>
          <p>Selected image: {image.name}</p>
          <button onClick={handleImageUpload}>Send to server</button>
        </div>
      )}
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default App;
