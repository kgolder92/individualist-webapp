import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Options } from "../components/Settings/Options";
import { SetUpGrocerySections } from "../components/Settings/SetUpGrocerySections";
import { UserSettings } from "../components/Settings/UserSettings";
import { Header } from "../components/Settings/Header";
import styled from "styled-components";

// Styled Components
const Container = styled.section`
    margin: 0px auto;
    width: 100vw;
    max-width: 700px;
    padding: 5px;
`;

/*
    SUMMARY:
        Page to allow user to update user preferences and add/delete grocery sections

    PARAMS: 

*/
export const Settings = ({ history }) => {
    // State
    const { grocerySections, onStartUp } = useContext(GlobalContext);

    // Functions
    // If reder check if we need to get grocerySections.
    //      if visiting the settings page and returning no update needed
    useEffect(() => {
        console.log(history);
        if (Object.entries(grocerySections.sections).length === 0) {
            onStartUp();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const settingsMap = { "Grocery Store Sections": <SetUpGrocerySections />, "User Settings": <UserSettings /> };
    const [activeOption, setActiveOption] = useState("Grocery Store Sections");
    return (
        <>
            <Header />
            <Container>
                <Options settingLabels={Object.keys(settingsMap)} selectSettingPage={setActiveOption} history={history} />
                {settingsMap[activeOption]}
            </Container>
        </>
    );
};
