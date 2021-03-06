import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import landingImg from "../../images/landing.png";
import studyIcon from "../../images/icons/study.png";
import giveClassesIcon from "../../images/icons/give-classes.png";
import heartIcon from '../../images/icons/heart.png';

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>Seja bem-vindo.
                {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.buttom, styles.buttonPrimary]}>
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttom, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.totalConnections}>
                Total de 255 conexões já realizadas. {' '}
                <Image source={heartIcon}/>
            </Text>



        </View>

    );




}

export default Landing;