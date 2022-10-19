import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import './App.css';
import PromotionDetail from "./PromotionDetail";

const App = () => {
    const [icon, setIcon] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [remainingText, setRemainingText] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const getThirdData = async () => {
        await axios({
            method: 'get',
            url: 'https://api.extrazone.com/promotions?Id=33',
            type: 'application/json',
            headers: {' X-Country-Id ': 'TR', ' X-Language-Id  ': 'TR'},
        }).then((response) => {
            setIcon(response.data.BrandIconUrl);
            setImageUrl(response.data.ImageUrl);
            setTitle(response.data.Title);
            setDescription(response.data.Description);
            setRemainingText(response.data.RemainingText);
        })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        getThirdData();
    }, []);

    return (
        <div className="App">
            <PromotionDetail
                icon={icon}
                imageUrl={imageUrl}
                remainingText={remainingText}
                title={title}
                description={description}
            />

        </div>
    );
}

export default App;
