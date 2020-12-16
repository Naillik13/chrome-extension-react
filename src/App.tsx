import React, {useEffect, useState} from 'react';
import './App.css';
import User from "./components/User";

const App: React.FunctionComponent<{}> = () => {
    const [fullName, setFullName] = useState("Stéphane Jean");
    const [country, setCountry] = useState("France");
    const [title, setTitle] = useState("Architect");
    const [imageUrl, setImageUrl] = useState("https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1703/tuktukdesign170300051/73535462-man-user-icon-profil-de-la-personne-avatar-glyph-illustration-vecteur.jpg?ver=6")
    useEffect(() => {
        if (chrome && chrome.tabs) {
            chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
                const tab = tabs[0];
                chrome.tabs.sendMessage(tab.id || 0, { from: "popup", subject: "getFullName" }, response => {
                    setFullName(response.fullName);
                    setTitle(response.title);
                    setCountry(response.country);
                    setImageUrl(response.imageUrl);
                });
            });
        }
    });
    return (
        <div className="app">
            <User fullName={fullName} country={country} title={title} imageUrl={imageUrl} />
        </div>
    );

};

export default App;
