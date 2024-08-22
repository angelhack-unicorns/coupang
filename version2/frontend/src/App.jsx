import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from './firebase';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import firebase from 'firebase/compat/app';

const ImageCapture = ({ user }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:8000/api/image', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Image uploaded successfully');
        console.log(await response.json());
      } else {
        console.log('Error uploading the image');
      }
    } catch (error) {
      console.log('Error uploading the image: ', error);
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
      {image && (
        <div>
          <p>Selected image: {image.name}</p>
          <button onClick={handleUpload}>Send to server</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // const token = await user.getIdToken();
        const token = await user.getIdToken();
        // const token = firebase.auth().user.getIdToken();
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

  const handleUpload = async () => {
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append('image', image);
    try {
      const response = await fetch('http://localhost:8000/api/image', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.ok) {
        console.log('Image uploaded successfully');
        console.log(await response.json());
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

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="camera"
        onChange={handleImageChange}
      />
      {image && (
        <div>
          <p>Selected image: {image.name}</p>
          <button onClick={handleUpload}>Send to server</button>
        </div>
      )}
      <button onClick={() => signOut(auth)}>Sign out</button>
    </div>
  );
};

export default App;
