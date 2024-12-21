
import {useEffect, useState} from "react";
export default function useLocalStorage(key, defaultValue)
{

    const [theme, setTheme] = useState(
        () => {
            let storedTheme;
            try {
                storedTheme = JSON.parse(localStorage.getItem(key)) || defaultValue;
               
            }
            catch(e) {
                console.log(e);
                storedTheme = defaultValue;
            }
           
            return storedTheme;
        }
    );

useEffect(() => {
localStorage.setItem(key, JSON.stringify(theme));

}, [key, theme]);

    return [theme, setTheme];
}