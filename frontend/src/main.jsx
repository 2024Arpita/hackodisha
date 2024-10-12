import React from"react";
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react";
import{mode} from "@chakra-ui/theme-tools"
import { extendTheme } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/react";
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
// for light and dark theme
const styles={
  global:(props)=> ({
    body:{
      color:mode('gray.800','whiteAlpha.900')(props),
      bg:mode('gray.100','#101010')(props)
    }
  })
};

const config={
  initialColorMode:"dark",
  useSystemColorMode: true
};

const colors={
  gray:{
    light:"#616161",
    dark: "#1e1e1e"
  }
};

const theme=extendTheme({config,styles,colors})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
