// src/context/WalletContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

// Create context
const WalletContext = createContext();

// Custom hook to use wallet context
export const useWallet = () => useContext(WalletContext);

const WalletProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [error, setError] = useState(null);

  // Connect wallet function
  const connectWallet = async () => {
    setError(null); // Reset error state
    if (window.ethereum) {
      try {
        const ethProvider = new ethers.BrowserProvider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });

        if (!ethProvider) {
          throw new Error("Failed to create provider");
        }

        const ethSigner = await ethProvider.getSigner();
        if (!ethSigner) {
          throw new Error("Failed to create signer");
        }

        const userAddress = await ethSigner.getAddress();
        setProvider(ethProvider);
        setSigner(ethSigner);
        setAccount(userAddress);
      } catch (err) {
        console.error("Error connecting wallet:", err);
        setError(err.message);
      }
    } else {
      setError("Please install MetaMask to use this feature!");
    }
  };

  // Auto connect on refresh if already connected
  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      try {
        if (window.ethereum) {
          const ethProvider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await window.ethereum.request({ method: "eth_accounts" });

          if (accounts.length > 0) {
            const ethSigner = await ethProvider.getSigner();
            setProvider(ethProvider);
            setSigner(ethSigner);
            setAccount(accounts[0]);
          }
        }
      } catch (err) {
        console.error("Error checking wallet connection:", err);
      }
    };

    checkIfWalletIsConnected();
  }, []);

  return (
    <WalletContext.Provider
      value={{
        account,
        provider,
        signer,
        connectWallet,
        isConnected: !!account,
        error,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletProvider;