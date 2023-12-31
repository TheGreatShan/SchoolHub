import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { ThemeContext } from './contexts';
function App() {

	const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: light)').matches? 'light': 'dark');

	useEffect(() => {
		if(theme === 'dark') {
			document.body.classList.add('dark')
		}
		else {
			document.body.classList.remove('dark');
		}
		
	}, [theme])

  return (
	<ThemeContext.Provider value={{theme, setTheme}}>
		<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home/>}/>
		</Routes>
	</BrowserRouter>
	</ThemeContext.Provider>
	
  );
}

export default App;
