import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BetContainer from '../table/BetContainer';

import chipWhite from '../../assets/ChipWhite.png';
import chipRed from '../../assets/ChipRed.png';
import chipGreen from '../../assets/ChipGreen.png';
import chipBlack from '../../assets/ChipBlack.png';
import chipPurple from '../../assets/ChipPurple.png';
import chipYellow from '../../assets/ChipYellow.png';
import puckOn from '../../assets/puckOn.png'
import puckOff from '../../assets/puckOff.png'

import '../../components/Screens.css';
import '../../components/Table.css';

import Bubble from '../Bubble';
import RollList from './RollList';
import PlayerRack from '../PlayerRack';
import GameMenu from '../GameMenu';

function GameBoard({ player = 'Ziggy', startingBank = 1500, tableMin = 5, tableMax = 5000 }) {
    //  ************************************************************
    const navigate = useNavigate();
    //  ************************************************************
    const [decreaseBets, setDecreaseBets] = useState(false);
    const [betAmount, setBetAmount] = useState(5);
    const [currentBet, setCurrentBet] = useState(0);
    const [bankroll, setBankroll] = useState(startingBank);
    const [rackAmount, setRackAmount] = useState(startingBank);
    const [shooterProfit, setShooterProfit] = useState(0);
    const [totalNet, setTotalNet] = useState(0);
    //  ************************************************************
    const [passBet, setPassBet] = useState(0);
    const [passOddsBet, setPassOddsBet] = useState(0);
    const [dontpassBet, setDontpassBet] = useState(0);
    const [dontpassOddsBet, setDontpassOddsBet] = useState(0);
    const [comeBet, setComeBet] = useState(0);
    const [dontcomeBet, setDontcomeBet] = useState(0);
    const [fieldBet, setFieldBet] = useState(0);
    const [anycrapsBet, setAnycrapsBet] = useState(0);
    const [anysevenBet, setAnysevenBet] = useState(0);
    const [hard4Bet, setHard4Bet] = useState(0);
    const [hard6Bet, setHard6Bet] = useState(0);
    const [hard8Bet, setHard8Bet] = useState(0);
    const [hard10Bet, setHard10Bet] = useState(0);
    const [twoBet, setTwoBet] = useState(0);
    const [threeBet, setThreeBet] = useState(0);
    const [elevenBet, setElevenBet] = useState(0);
    const [twelveBet, setTwelveBet] = useState(0);
    const [box4Bet, setBox4Bet] = useState(0);
    const [box5Bet, setBox5Bet] = useState(0);
    const [box6Bet, setBox6Bet] = useState(0);
    const [box8Bet, setBox8Bet] = useState(0);
    const [box9Bet, setBox9Bet] = useState(0);
    const [box10Bet, setBox10Bet] = useState(0);
    const [place4Bet, setPlace4Bet] = useState(0);
    const [place5Bet, setPlace5Bet] = useState(0);
    const [place6Bet, setPlace6Bet] = useState(0);
    const [place8Bet, setPlace8Bet] = useState(0);
    const [place9Bet, setPlace9Bet] = useState(0);
    const [place10Bet, setPlace10Bet] = useState(0);
    const [put4Bet, setPut4Bet] = useState(0);
    const [put5Bet, setPut5Bet] = useState(0);
    const [put6Bet, setPut6Bet] = useState(0);
    const [put8Bet, setPut8Bet] = useState(0);
    const [put9Bet, setPut9Bet] = useState(0);
    const [put10Bet, setPut10Bet] = useState(0);
    const [place4OddsBet, setPlace4OddsBet] = useState(0);
    const [place5OddsBet, setPlace5OddsBet] = useState(0);
    const [place6OddsBet, setPlace6OddsBet] = useState(0);
    const [place8OddsBet, setPlace8OddsBet] = useState(0);
    const [place9OddsBet, setPlace9OddsBet] = useState(0);
    const [place10OddsBet, setPlace10OddsBet] = useState(0);
    const [put4OddsBet, setPut4OddsBet] = useState(0);
    const [put5OddsBet, setPut5OddsBet] = useState(0);
    const [put6OddsBet, setPut6OddsBet] = useState(0);
    const [put8OddsBet, setPut8OddsBet] = useState(0);
    const [put9OddsBet, setPut9OddsBet] = useState(0);
    const [put10OddsBet, setPut10OddsBet] = useState(0);
    const [smallBet, setSmallBet] = useState(0);
    const [allBet, setAllBet] = useState(0);
    const [tallBet, setTallBet] = useState(0);
    const [hop13Bet, setHop13Bet] = useState(0);
    const [hop22Bet, setHop22Bet] = useState(0);
    const [hop23Bet, setHop23Bet] = useState(0);
    const [hop14Bet, setHop14Bet] = useState(0);
    const [hop15Bet, setHop15Bet] = useState(0);
    const [hop24Bet, setHop24Bet] = useState(0);
    const [hop33Bet, setHop33Bet] = useState(0);
    const [hop44Bet, setHop44Bet] = useState(0);
    const [hop35Bet, setHop35Bet] = useState(0);
    const [hop26Bet, setHop26Bet] = useState(0);
    const [hop36Bet, setHop36Bet] = useState(0);
    const [hop45Bet, setHop45Bet] = useState(0);
    const [hop46Bet, setHop46Bet] = useState(0);
    const [hop55Bet, setHop55Bet] = useState(0);
    const [hop16Bet, setHop16Bet] = useState(0);
    const [hop25Bet, setHop25Bet] = useState(0);
    const [hop34Bet, setHop34Bet] = useState(0);
    const [worldBet, setWorldBet] = useState(0);
    const [fireBet, setFireBet] = useState(0);
    const [repeater2Bet, setRepeater2Bet] = useState(0);
    const [repeater3Bet, setRepeater3Bet] = useState(0);
    const [repeater4Bet, setRepeater4Bet] = useState(0);
    const [repeater5Bet, setRepeater5Bet] = useState(0);
    const [repeater6Bet, setRepeater6Bet] = useState(0);
    const [repeater8Bet, setRepeater8Bet] = useState(0);
    const [repeater9Bet, setRepeater9Bet] = useState(0);
    const [repeater10Bet, setRepeater10Bet] = useState(0);
    const [repeater11Bet, setRepeater11Bet] = useState(0);
    const [repeater12Bet, setRepeater12Bet] = useState(0);
    //  ************************************************************
    const [leftDie, setLeftDie] = useState(null);
    const [rightDie, setRightDie] = useState(null);
    const [rollList, setRollList] = useState([]);
    //  ************************************************************
    const [shooter, setShooter] = useState(1);
    const [rollCount, setRollCount] = useState(0);
    const [totalRollCount, setTotalRollCount] = useState(0);
    const [point, setPoint] = useState(0);
    // const [isComeout, setIsComeout] = useState(true);
    const [isWinner, setIsWinner] = useState(false);
    const [winAmount, setWinAmount] = useState(0);
    const [uniquePoints, setUniquePoints] = useState(0);

    //  ************************************************************
    //  ************************************************************
    const changeBet = (betLocation, betAmount, decrease, value) => {

        if (rackAmount - betAmount < 0 && !decrease) {
            // alert("You don't have enough chips in your rack for this bet");
            return;
        }
        if (decrease && value <= 0) {
            return;
        }
        if (decrease && betAmount > value) {
            return;
        }
        switch (betLocation) {
            case "pass":
                if (decrease) {
                    setPassBet(passBet - betAmount);
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPassBet(passBet + betAmount);
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "pass-odds":
                if (rollCount === 0) {
                    return;
                }
                if (decrease) {
                    setPassOddsBet(passOddsBet - betAmount);
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPassOddsBet(passOddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }

                break;
            case "dontpass":
                if (decrease) {
                    setDontpassBet(dontpassBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setDontpassBet(dontpassBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }

                break;
            case "dontpass-odds":
                if (rollCount === 0) {
                    return;
                }
                if (decrease) {
                    setDontpassOddsBet(dontpassOddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setDontpassOddsBet(dontpassOddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }

                break;
            case "come":
                if (rollCount === 0) {
                    return;
                }
                if (decrease) {
                    setComeBet(comeBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setComeBet(comeBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }

                break;
            case "dontcome":
                if (rollCount === 0) {
                    return;
                }
                if (decrease) {
                    setDontcomeBet(dontcomeBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setDontcomeBet(dontcomeBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }

                break;
            case "field":
                if (decrease) {
                    setFieldBet(fieldBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setFieldBet(fieldBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "anycraps":
                if (decrease) {
                    setAnycrapsBet(anycrapsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setAnycrapsBet(anycrapsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "anyseven":
                if (decrease) {
                    setAnysevenBet(anysevenBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setAnysevenBet(anysevenBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hard4":
                if (decrease) {
                    setHard4Bet(hard4Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHard4Bet(hard4Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hard6":
                if (decrease) {
                    setHard6Bet(hard6Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHard6Bet(hard6Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hard8":
                if (decrease) {
                    setHard8Bet(hard8Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHard8Bet(hard8Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hard10":
                if (decrease) {
                    setHard10Bet(hard10Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHard10Bet(hard10Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "two":
                if (decrease) {
                    setTwoBet(twoBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setTwoBet(twoBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "three":
                if (decrease) {
                    setThreeBet(threeBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setThreeBet(threeBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "eleven":
                if (decrease) {
                    setElevenBet(elevenBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setElevenBet(elevenBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "twelve":
                if (decrease) {
                    setTwelveBet(twelveBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setTwelveBet(twelveBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "box4":
                if (decrease) {
                    setBox4Bet(box4Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setBox4Bet(box4Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "box5":
                if (decrease) {
                    setBox5Bet(box5Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setBox5Bet(box5Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "box6":
                if (decrease) {
                    setBox6Bet(box6Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setBox6Bet(box6Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "box8":
                if (decrease) {
                    setBox8Bet(box8Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setBox8Bet(box8Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "box9":
                if (decrease) {
                    setBox9Bet(box9Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setBox9Bet(box9Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "box10":
                if (decrease) {
                    setBox10Bet(box10Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setBox10Bet(box10Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place4":
                if (decrease) {
                    setPlace4Bet(place4Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace4Bet(place4Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place5":
                if (decrease) {
                    setPlace5Bet(place5Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace5Bet(place5Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place6":
                if (decrease) {
                    setPlace6Bet(place6Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace6Bet(place6Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place8":
                if (decrease) {
                    setPlace8Bet(place8Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace8Bet(place8Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place9":
                if (decrease) {
                    setPlace9Bet(place9Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace9Bet(place9Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place10":
                if (decrease) {
                    setPlace10Bet(place10Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace10Bet(place10Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put4":
                if (decrease) {
                    setPut4Bet(put4Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut4Bet(put4Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put5":
                if (decrease) {
                    setPut5Bet(put5Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut5Bet(put5Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put6":
                if (decrease) {
                    setPut6Bet(put6Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut6Bet(put6Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put8":
                if (decrease) {
                    setPut8Bet(put8Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut8Bet(put8Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put9":
                if (decrease) {
                    setPut9Bet(put9Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut9Bet(put9Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put10":
                if (decrease) {
                    setPut10Bet(put10Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut10Bet(put10Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place4Odds":
                if (decrease) {
                    setPlace4OddsBet(place4OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace4OddsBet(place4OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place5Odds":
                if (decrease) {
                    setPlace5OddsBet(place5OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace5OddsBet(place5OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place6Odds":
                if (decrease) {
                    setPlace6OddsBet(place6OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace6OddsBet(place6OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place8Odds":
                if (decrease) {
                    setPlace8OddsBet(place8OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace8OddsBet(place8OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place9Odds":
                if (decrease) {
                    setPlace9OddsBet(place9OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace9OddsBet(place9OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "place10Odds":
                if (decrease) {
                    setPlace10OddsBet(place10OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPlace10OddsBet(place10OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put4Odds":
                if (decrease) {
                    setPut4OddsBet(put4OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut4OddsBet(put4OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put5Odds":
                if (decrease) {
                    setPut5OddsBet(put5OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut5OddsBet(put5OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put6Odds":
                if (decrease) {
                    setPut6OddsBet(put6OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut6OddsBet(put6OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put8Odds":
                if (decrease) {
                    setPut8OddsBet(put8OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut8OddsBet(put8OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put9Odds":
                if (decrease) {
                    setPut9OddsBet(put9OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut9OddsBet(put9OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "put10Odds":
                if (decrease) {
                    setPut10OddsBet(put10OddsBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setPut10OddsBet(put10OddsBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "small":
                if (decrease) {
                    setSmallBet(smallBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setSmallBet(smallBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "tall":
                if (decrease) {
                    setTallBet(tallBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setTallBet(tallBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "all":
                if (decrease) {
                    setAllBet(allBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setAllBet(allBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop13":
                if (decrease) {
                    setHop13Bet(hop13Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop13Bet(hop13Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop22":
                if (decrease) {
                    setHop22Bet(hop22Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop22Bet(hop22Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop14":
                if (decrease) {
                    setHop14Bet(hop14Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop14Bet(hop14Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop23":
                if (decrease) {
                    setHop23Bet(hop23Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop23Bet(hop23Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop15":
                if (decrease) {
                    setHop15Bet(hop15Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop15Bet(hop15Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop24":
                if (decrease) {
                    setHop24Bet(hop24Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop24Bet(hop24Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop33":
                if (decrease) {
                    setHop33Bet(hop33Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop33Bet(hop33Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop44":
                if (decrease) {
                    setHop44Bet(hop44Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop44Bet(hop44Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop35":
                if (decrease) {
                    setHop35Bet(hop35Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop35Bet(hop35Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop26":
                if (decrease) {
                    setHop26Bet(hop26Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop26Bet(hop26Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop36":
                if (decrease) {
                    setHop36Bet(hop36Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop36Bet(hop36Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop45":
                if (decrease) {
                    setHop45Bet(hop45Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop45Bet(hop45Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop46":
                if (decrease) {
                    setHop46Bet(hop46Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop46Bet(hop46Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop55":
                if (decrease) {
                    setHop55Bet(hop55Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop55Bet(hop55Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop16":
                if (decrease) {
                    setHop16Bet(hop16Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop16Bet(hop16Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop25":
                if (decrease) {
                    setHop25Bet(hop25Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop25Bet(hop25Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "hop34":
                if (decrease) {
                    setHop34Bet(hop34Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setHop34Bet(hop34Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "world":
                if (decrease) {
                    setWorldBet(worldBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setWorldBet(worldBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "fire":
                if (decrease) {
                    setFireBet(fireBet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setFireBet(fireBet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater2":
                if (decrease) {
                    setRepeater2Bet(repeater2Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater2Bet(repeater2Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater3":
                if (decrease) {
                    setRepeater3Bet(repeater3Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater3Bet(repeater3Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater4":
                if (decrease) {
                    setRepeater4Bet(repeater4Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater4Bet(repeater4Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater5":
                if (decrease) {
                    setRepeater5Bet(repeater5Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater5Bet(repeater5Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater6":
                if (decrease) {
                    setRepeater6Bet(repeater6Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater6Bet(repeater6Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater8":
                if (decrease) {
                    setRepeater8Bet(repeater8Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater8Bet(repeater8Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater9":
                if (decrease) {
                    setRepeater9Bet(repeater9Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater9Bet(repeater9Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater10":
                if (decrease) {
                    setRepeater10Bet(repeater10Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater10Bet(repeater10Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater11":
                if (decrease) {
                    setRepeater11Bet(repeater11Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater11Bet(repeater11Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            case "repeater12":
                if (decrease) {
                    setRepeater12Bet(repeater12Bet - betAmount)
                    setCurrentBet(currentBet - betAmount);
                    setRackAmount(rackAmount + betAmount);
                } else {
                    setRepeater12Bet(repeater12Bet + betAmount)
                    setCurrentBet(currentBet + betAmount);
                    setRackAmount(rackAmount - betAmount);
                }
                break;
            default:
                break;
        }
    }
    //  ************************************************************
    const clearBet = (betName) => {
        switch (betName) {
            case "passBet":
                setPassBet(0)
                break;
            case "passOddsBet":
                setPassOddsBet(0)
                break;
            case "dontpassBet":
                setDontpassBet(0)
                break;
            case "dontpassOddsBet":
                setPassOddsBet(0)
                break;
            case "comeBet":
                setComeBet(0)
                break;
            case "dontcomeBet":
                setDontcomeBet(0)
                break;
            case "fieldBet":
                setFieldBet(0)
                break;
            case "anycrapsBet":
                setAnycrapsBet(0)
                break;
            case "anysevenBet":
                setAnysevenBet(0)
                break;
            case "hard4Bet":
                setHard4Bet(0)
                break;
            case "hard6Bet":
                setHard4Bet(0)
                break;
            case "hard8Bet":
                setHard4Bet(0)
                break;
            case "hard10Bet":
                setHard4Bet(0)
                break;
            case "twoBet":
                setTwoBet(0)
                break;
            case "threeBet":
                setThreeBet(0)
                break;
            case "elevenBet":
                setElevenBet(0)
                break;
            case "twelveBet":
                setTwelveBet(0)
                break;
            case "box4Bet":
                setBox4Bet(0)
                break;
            case "box5Bet":
                setBox5Bet(0)
                break;
            case "box6Bet":
                setBox6Bet(0)
                break;
            case "box8Bet":
                setBox8Bet(0)
                break;
            case "box9Bet":
                setBox9Bet(0)
                break;
            case "box10Bet":
                setBox10Bet(0)
                break;
            case "place4Bet":
                setPlace4Bet(0)
                break;
            case "place5Bet":
                setPlace5Bet(0)
                break;
            case "place6Bet":
                setPlace6Bet(0)
                break;
            case "place8Bet":
                setPlace8Bet(0)
                break;
            case "place9Bet":
                setPlace9Bet(0)
                break;
            case "place10Bet":
                setPlace10Bet(0)
                break;
            case "put4Bet":
                setPut4Bet(0)
                break;
            case "put5Bet":
                setPut5Bet(0)
                break;
            case "put6Bet":
                setPut6Bet(0)
                break;
            case "put8Bet":
                setPut8Bet(0)
                break;
            case "put9Bet":
                setPut9Bet(0)
                break;
            case "put10Bet":
                setPut10Bet(0)
                break;
            case "place4OddsBet":
                setPlace4OddsBet(0)
                break;
            case "place5OddsBet":
                setPlace5OddsBet(0)
                break;
            case "place6OddsBet":
                setPlace6OddsBet(0)
                break;
            case "place8OddsBet":
                setPlace8OddsBet(0)
                break;
            case "place9OddsBet":
                setPlace9OddsBet(0)
                break;
            case "place10OddsBet":
                setPlace10OddsBet(0)
                break;
            case "put4OddsBet":
                setPut4OddsBet(0)
                break;
            case "put5OddsBet":
                setPut5OddsBet(0)
                break;
            case "put6OddsBet":
                setPut6OddsBet(0)
                break;
            case "put8OddsBet":
                setPut8OddsBet(0)
                break;
            case "put9OddsBet":
                setPut9OddsBet(0)
                break;
            case "put10OddsBet":
                setPut10OddsBet(0)
                break;
            case "smallBet":
                setSmallBet(0)
                break;
            case "tallBet":
                setTallBet(0)
                break;
            case "allBet":
                setAllBet(0)
                break;
            case "hop13Bet":
                setHop13Bet(0)
                break;
            case "hop22Bet":
                setHop22Bet(0)
                break;
            case "hop14Bet":
                setHop14Bet(0)
                break;
            case "hop23Bet":
                setHop23Bet(0)
                break;
            case "hop15Bet":
                setHop15Bet(0)
                break;
            case "hop24Bet":
                setHop24Bet(0)
                break;
            case "hop33Bet":
                setHop33Bet(0)
                break;
            case "hop44Bet":
                setHop44Bet(0)
                break;
            case "hop35Bet":
                setHop35Bet(0)
                break;
            case "hop26Bet":
                setHop26Bet(0)
                break;
            case "hop36Bet":
                setHop36Bet(0)
                break;
            case "hop45Bet":
                setHop45Bet(0)
                break;
            case "hop46Bet":
                setHop46Bet(0)
                break;
            case "hop55Bet":
                setHop55Bet(0)
                break;
            case "hop16Bet":
                setHop16Bet(0)
                break;
            case "hop25Bet":
                setHop25Bet(0)
                break;
            case "hop34Bet":
                setHop34Bet(0)
                break;
            case "worldBet":
                setWorldBet(0)
                break;
            case "fireBet":
                setFireBet(0)
                break;
            case "repeater2Bet":
                setRepeater2Bet(0)
                break;
            case "repeater3Bet":
                setRepeater3Bet(0)
                break;
            case "repeater4Bet":
                setRepeater4Bet(0)
                break;
            case "repeater5Bet":
                setRepeater5Bet(0)
                break;
            case "repeater6Bet":
                setRepeater6Bet(0)
                break;
            case "repeater8Bet":
                setRepeater2Bet(0)
                break;
            case "repeater9Bet":
                setRepeater3Bet(0)
                break;
            case "repeater10Bet":
                setRepeater4Bet(0)
                break;
            case "repeater11Bet":
                setRepeater5Bet(0)
                break;
            case "repeater12Bet":
                setRepeater6Bet(0)
                break;
            default:
                break;
        }
    }
    //  ************************************************************
    const settleBetWin = (bet) => {
        setIsWinner(true);
        const wager = bet[2]
        const calculate = wager * bet[1][0] / bet[1][1]
        console.log(`Win $${calculate}`);
        setRackAmount(rackAmount + parseInt(calculate))
        setWinAmount([parseInt(calculate), bet[0]])
        setTimeout(() => {
            setIsWinner(false)
        }, 1000);
        return parseInt(calculate)
    }
    //  ************************************************************
    const settleBetLoss = (bet) => {
        console.log("loss", bet[2]);
        const wager = bet[2];
        //setBankroll(bankroll - wager);
        setCurrentBet(currentBet - wager);
        clearBet(bet[0])
    }
    //  ************************************************************
    const scanBets = (roll) => {
        let betsOut = [];
        if (passBet > 0) {
            betsOut.push(['passBet', [1, 1], passBet])
        }
        if (dontpassBet > 0) {
            betsOut.push(['dontpassBet', [1, 1], dontpassBet])
        }
        if (passOddsBet > 0 && point === 4) {
            betsOut.push(['passOddsBet', [2, 1], passOddsBet])
        } else if (passOddsBet > 0 && point === 10) {
            betsOut.push(['passOddsBet', [2, 1], passOddsBet])
        } else if (passOddsBet > 0 && point === 5) {
            betsOut.push(['passOddsBet', [3, 2], passOddsBet])
        } else if (passOddsBet > 0 && point === 9) {
            betsOut.push(['passOddsBet', [3, 2], passOddsBet])
        } else if (passOddsBet > 0 && point === 6) {
            betsOut.push(['passOddsBet', [6, 5], passOddsBet])
        } else if (passOddsBet > 0 && point === 8) {
            betsOut.push(['passOddsBet', [6, 5], passOddsBet])
        } else if (passOddsBet > 0) {
            betsOut.push(['passOddsBet', [1, 1], passOddsBet])
        }
        if (dontpassOddsBet > 0 && point === 4) {
            betsOut.push(['dontpassOddsBet', [1, 2], dontpassOddsBet])
        } else if (dontpassOddsBet > 0 && point === 10) {
            betsOut.push(['dontpassOddsBet', [1, 2], dontpassOddsBet])
        } else if (dontpassOddsBet > 0 && point === 5) {
            betsOut.push(['dontpassOddsBet', [2, 3], dontpassOddsBet])
        } else if (dontpassOddsBet > 0 && point === 9) {
            betsOut.push(['dontpassOddsBet', [2, 3], dontpassOddsBet])
        } else if (dontpassOddsBet > 0 && point === 6) {
            betsOut.push(['dontpassOddsBet', [5, 6], dontpassOddsBet])
        } else if (dontpassOddsBet > 0 && point === 8) {
            betsOut.push(['dontpassOddsBet', [5, 6], dontpassOddsBet])
        } else if (dontpassOddsBet > 0) {
            betsOut.push(['dontpassOddsBet', [1, 1], dontpassOddsBet])
        }
        if (fieldBet > 0 && roll === 2) {
            betsOut.push(['fieldBet', [2, 1], fieldBet])
        } else if (fieldBet > 0 && roll === 12) {
            betsOut.push(['fieldBet', [3, 1], fieldBet])
        } else if (fieldBet > 0) {
            betsOut.push(['fieldBet', [1, 1], fieldBet])
        }
        if (comeBet > 0) {
            betsOut.push(['comeBet', [1, 1], comeBet])
        }
        if (dontcomeBet > 0) {
            betsOut.push(['dontcomeBet', [1, 1], dontcomeBet])
        }
        if (worldBet > 0 && roll === 2) {
            betsOut.push(['worldBet', [30, 1], worldBet])
        } else if (worldBet > 0 && roll === 3) {
            betsOut.push(['worldBet', [15, 1], worldBet])
        } else if (worldBet > 0 && roll === 11) {
            betsOut.push(['worldBet', [15, 1], worldBet])
        } else if (worldBet > 0 && roll === 12) {
            betsOut.push(['worldBet', [30, 1], worldBet])
        } else if (worldBet > 0 && roll === 7) {
            betsOut.push(['worldBet', [4, 1], worldBet])
        } else if (worldBet > 0) {
            betsOut.push(['worldBet', [1, 1], worldBet])
        }
        if (fireBet > 0 && uniquePoints === 4) {
            betsOut.push(['fireBet', [25, 1], fireBet])
        } else if (fireBet > 0 && uniquePoints === 5) {
            betsOut.push(['fireBet', [250, 1], fireBet])
        } else if (fireBet > 0 && uniquePoints === 6) {
            betsOut.push(['fireBet', [2500, 1], fireBet])
        } else if (fireBet > 0) {
            betsOut.push(['fireBet', [1, 1], fireBet])
        }
        if (smallBet > 0) {
            betsOut.push(['smallBet', [34, 1], smallBet])
        }
        if (allBet > 0) {
            betsOut.push(['allBet', [174, 1], allBet])
        }
        if (tallBet > 0) {
            betsOut.push(['tallBet', [34, 1], tallBet])
        }
        if (anycrapsBet > 0) {
            betsOut.push(['anycrapsBet', [7, 1], anycrapsBet])
        }
        if (anysevenBet > 0) {
            betsOut.push(['anysevenBet', [4, 1], anysevenBet])
        }
        if (hard6Bet > 0) {
            betsOut.push(['hard6Bet', [9, 1], hard6Bet])
        }
        if (hard8Bet > 0) {
            betsOut.push(['hard8Bet', [9, 1], hard8Bet])
        }
        if (hard4Bet > 0) {
            betsOut.push(['hard4Bet', [7, 1], hard4Bet])
        }
        if (hard10Bet > 0) {
            betsOut.push(['hard10Bet', [7, 1], hard10Bet])
        }
        if (twoBet > 0) {
            betsOut.push(['twoBet', [30, 1], twoBet])
        }
        if (threeBet > 0) {
            betsOut.push(['threeBet', [15, 1], threeBet])
        }
        if (elevenBet > 0) {
            betsOut.push(['elevenBet', [15, 1], elevenBet])
        }
        if (twelveBet > 0) {
            betsOut.push(['twelveBet', [30, 1], twelveBet])
        }
        if (box4Bet > 0) {
            betsOut.push(['box4Bet', [9, 5], box4Bet])
        }
        if (box5Bet > 0) {
            betsOut.push(['box5Bet', [7, 5], box5Bet])
        }
        if (box6Bet > 0) {
            betsOut.push(['box6Bet', [7, 6], box6Bet])
        }
        if (box8Bet > 0) {
            betsOut.push(['box8Bet', [7, 6], box8Bet])
        }
        if (box9Bet > 0) {
            betsOut.push(['box9Bet', [7, 5], box9Bet])
        }
        if (box10Bet > 0) {
            betsOut.push(['box10Bet', [9, 5], box10Bet])
        }
        if (place4Bet > 0) {
            betsOut.push(['place4Bet', [1, 1], place4Bet])
        }
        if (place5Bet > 0) {
            betsOut.push(['place5Bet', [1, 1], place5Bet])
        }
        if (place6Bet > 0) {
            betsOut.push(['place6Bet', [1, 1], place6Bet])
        }
        if (place8Bet > 0) {
            betsOut.push(['place8Bet', [1, 1], place8Bet])
        }
        if (place9Bet > 0) {
            betsOut.push(['place9Bet', [1, 1], place9Bet])
        }
        if (place10Bet > 0) {
            betsOut.push(['place10Bet', [1, 1], place10Bet])
        }
        if (place4OddsBet > 0) {
            betsOut.push(['place4OddsBet', [2, 1], place4OddsBet])
        }
        if (place5OddsBet > 0) {
            betsOut.push(['place5OddsBet', [3, 2], place5OddsBet])
        }
        if (place6OddsBet > 0) {
            betsOut.push(['place6OddsBet', [6, 5], place6OddsBet])
        }
        if (place8OddsBet > 0) {
            betsOut.push(['place8OddsBet', [6, 5], place8OddsBet])
        }
        if (place9OddsBet > 0) {
            betsOut.push(['place9OddsBet', [3, 2], place9OddsBet])
        }
        if (place10OddsBet > 0) {
            betsOut.push(['place10OddsBet', [2, 1], place10OddsBet])
        }
        if (put4Bet > 0) {
            betsOut.push(['put4Bet', [1, 1], put4Bet])
        }
        if (put5Bet > 0) {
            betsOut.push(['put5Bet', [1, 1], put5Bet])
        }
        if (put6Bet > 0) {
            betsOut.push(['put6Bet', [1, 1], put6Bet])
        }
        if (put8Bet > 0) {
            betsOut.push(['put8Bet', [1, 1], put8Bet])
        }
        if (put9Bet > 0) {
            betsOut.push(['put9Bet', [1, 1], put9Bet])
        }
        if (put10Bet > 0) {
            betsOut.push(['put10Bet', [1, 1], put10Bet])
        }
        if (put4OddsBet > 0) {
            betsOut.push(['put4OddsBet', [1, 2], put4OddsBet])
        }
        if (put5OddsBet > 0) {
            betsOut.push(['put5OddsBet', [2, 3], put5OddsBet])
        }
        if (put6OddsBet > 0) {
            betsOut.push(['put6OddsBet', [5, 6], put6OddsBet])
        }
        if (put8OddsBet > 0) {
            betsOut.push(['put8OddsBet', [5, 6], put8OddsBet])
        }
        if (put9OddsBet > 0) {
            betsOut.push(['put9OddsBet', [2, 3], put9OddsBet])
        }
        if (put10OddsBet > 0) {
            betsOut.push(['put10OddsBet', [1, 2], put10OddsBet])
        }
        if (hop13Bet > 0) {
            betsOut.push(['hop13Bet', [15, 1], hop13Bet])
        }
        if (hop22Bet > 0) {
            betsOut.push(['hop22Bet', [30, 1], hop22Bet])
        }
        if (hop14Bet > 0) {
            betsOut.push(['hop14Bet', [15, 1], hop14Bet])
        }
        if (hop23Bet > 0) {
            betsOut.push(['hop23Bet', [15, 1], hop23Bet])
        }
        if (hop15Bet > 0) {
            betsOut.push(['hop15Bet', [15, 1], hop15Bet])
        }
        if (hop24Bet > 0) {
            betsOut.push(['hop24Bet', [15, 1], hop24Bet])
        }
        if (hop33Bet > 0) {
            betsOut.push(['hop33Bet', [30, 1], hop33Bet])
        }
        if (hop44Bet > 0) {
            betsOut.push(['hop44Bet', [30, 1], hop44Bet])
        }
        if (hop35Bet > 0) {
            betsOut.push(['hop35Bet', [15, 1], hop35Bet])
        }
        if (hop26Bet > 0) {
            betsOut.push(['hop26Bet', [15, 1], hop26Bet])
        }
        if (hop36Bet > 0) {
            betsOut.push(['hop36Bet', [15, 1], hop36Bet])
        }
        if (hop45Bet > 0) {
            betsOut.push(['hop45Bet', [15, 1], hop45Bet])
        }
        if (hop46Bet > 0) {
            betsOut.push(['hop46Bet', [15, 1], hop46Bet])
        }
        if (hop55Bet > 0) {
            betsOut.push(['hop55Bet', [30, 1], hop55Bet])
        }
        if (hop16Bet > 0) {
            betsOut.push(['hop16Bet', [15, 1], hop16Bet])
        }
        if (hop25Bet > 0) {
            betsOut.push(['hop25Bet', [15, 1], hop25Bet])
        }
        if (hop34Bet > 0) {
            betsOut.push(['hop34Bet', [15, 1], hop34Bet])
        }
        if (repeater2Bet > 0) {
            betsOut.push(['repeater2Bet', [40, 1], repeater2Bet])
        }
        if (repeater3Bet > 0) {
            betsOut.push(['repeater3Bet', [50, 1], repeater3Bet])
        }
        if (repeater4Bet > 0) {
            betsOut.push(['repeater4Bet', [65, 1], repeater4Bet])
        }
        if (repeater5Bet > 0) {
            betsOut.push(['repeater5Bet', [80, 1], repeater5Bet])
        }
        if (repeater6Bet > 0) {
            betsOut.push(['repeater6Bet', [90, 1], repeater6Bet])
        }
        if (repeater8Bet > 0) {
            betsOut.push(['repeater8Bet', [90, 1], repeater8Bet])
        }
        if (repeater9Bet > 0) {
            betsOut.push(['repeater9Bet', [80, 1], repeater9Bet])
        }
        if (repeater10Bet > 0) {
            betsOut.push(['repeater10Bet', [65, 1], repeater10Bet])
        }
        if (repeater11Bet > 0) {
            betsOut.push(['repeater11Bet', [50, 1], repeater11Bet])
        }
        if (repeater12Bet > 0) {
            betsOut.push(['repeater12Bet', [40, 1], repeater12Bet])
        }
        return betsOut;
    }
    //  ************************************************************
    const checkBets = (isComeout, roll, left, right) => {
        let betsOn = scanBets(roll);
        let tempBankroll = 0;

        if (point === 0) {
            switch (roll) {
                case 2:
                    console.log("Craps 2");
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'anycrapsBet' || e[0] === 'twoBet' || e[0] === 'worldBet' ||
                                e[0] === 'dontpassBet' || e[0] === 'fieldBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            } else {
                                settleBetLoss(e)
                                tempBankroll = tempBankroll - e[2];
                            }
                        })
                    }
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 3:
                    console.log("Craps 3");
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'anycrapsBet' || e[0] === 'threeBet' || e[0] === 'worldBet' ||
                                e[0] === 'dontpassBet' || e[0] === 'fieldBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            } else {
                                settleBetLoss(e)
                                tempBankroll = tempBankroll - e[2];
                            }
                        })
                    }
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 4:
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'fieldBet' || e[0] === 'box4Bet' || e[0] === 'place4Bet' || e[0] === 'place4OddsBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                            if (e[0] === 'hop13') {
                                if ((left === 1 && right === 3) || (left === 3 && right === 1)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'hop22') {
                                if ((left === 2 && right === 2)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                        })
                    }
                    setPoint(roll);
                    setRollCount(rollCount + 1);
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 5:
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'fieldBet') {
                                settleBetLoss(e)
                                tempBankroll = tempBankroll - e[2];
                            }
                            if (e[0] === 'box5Bet' || e[0] === 'place5Bet' || e[0] === 'place5OddsBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                            if (e[0] === 'hop14') {
                                if ((left === 1 && right === 4) || (left === 4 && right === 1)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                } else {
                                    settleBetLoss(e)
                                    tempBankroll = tempBankroll - e[2];
                                }
                            }
                            if (e[0] === 'hop23') {
                                if ((left === 2 && right === 3) || (left === 3 && right === 2)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                } else {
                                    settleBetLoss(e)
                                    tempBankroll = tempBankroll - e[2];
                                }
                            }
                        })
                    }
                    setPoint(roll);
                    setRollCount(rollCount + 1);
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 6:
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'fieldBet') {
                                settleBetLoss(e)
                                tempBankroll = tempBankroll - e[2];
                            }
                            if (e[0] === 'box6Bet' || e[0] === 'place6Bet' || e[0] === 'place6OddsBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                            if (e[0] === 'hop15') {
                                if ((left === 1 && right === 5) || (left === 5 && right === 1)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                } else {
                                    settleBetLoss(e)
                                    tempBankroll = tempBankroll - e[2];
                                }
                            }
                            if (e[0] === 'hop24') {
                                if ((left === 2 && right === 4) || (left === 4 && right === 2)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                } else {
                                    settleBetLoss(e)
                                    tempBankroll = tempBankroll - e[2];
                                }
                            }
                            if (e[0] === 'hop33') {
                                if ((left === 3 && right === 3)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                } else {
                                    settleBetLoss(e)
                                    tempBankroll = tempBankroll - e[2];
                                }
                            }
                        })
                    }
                    setPoint(roll);
                    setRollCount(rollCount + 1);
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 7:
                    console.log("Comeout 7");
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'hop16Bet') {
                                if ((left === 1 && right === 6) || (left === 6 && right === 1)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'hop25Bet') {
                                if ((left === 2 && right === 5) || (left === 5 && right === 2)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'hop34Bet') {
                                if ((left === 3 && right === 4) || (left === 4 && right === 3)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'passBet' || e[0] === 'anysevenBet' || e[0] === 'put4Bet' ||
                                e[0] === 'put5Bet' || e[0] === 'put6Bet' || e[0] === 'put8Bet' ||
                                e[0] === 'put9Bet' || e[0] === 'put10Bet' || e[0] === 'put4OddsBet' ||
                                e[0] === 'put5OddsBet' || e[0] === 'put6OddsBet' || e[0] === 'put8OddsBet' ||
                                e[0] === 'put9OddsBet' || e[0] === 'put10OddsBet' || e[0] === 'worldBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            } else {
                                settleBetLoss(e)
                                tempBankroll = tempBankroll - e[2];
                            }

                        })
                    }
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 8:
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'fieldBet') {
                                settleBetLoss(e)
                                tempBankroll = tempBankroll - e[2];
                            }
                            if (e[0] === 'box8Bet' || e[0] === 'place8Bet' || e[0] === 'place8OddsBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                            if (e[0] === 'hop35') {
                                if ((left === 3 && right === 5) || (left === 5 && right === 3)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'hop26') {
                                if ((left === 2 && right === 6) || (left === 6 && right === 2)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'hop44') {
                                if ((left === 4 && right === 4)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                        })
                    }
                    setPoint(roll);
                    setRollCount(rollCount + 1);
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 9:
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'box9Bet' || e[0] === 'place9Bet' || e[0] === 'place9OddsBet' || e[0] === 'fieldBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                            if (e[0] === 'hop36') {
                                if ((left === 3 && right === 6) || (left === 6 && right === 3)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'hop45') {
                                if ((left === 4 && right === 5) || (left === 5 && right === 4)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                        })
                    }
                    setPoint(roll);
                    setRollCount(rollCount + 1);
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 10:
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'fieldBet' || e[0] === 'box10Bet' || e[0] === 'place10Bet' || e[0] === 'place10OddsBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                            if (e[0] === 'hop46') {
                                if ((left === 4 && right === 6) || (left === 6 && right === 4)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                            if (e[0] === 'hop55') {
                                if ((left === 5 && right === 5)) {
                                    const profit = settleBetWin(e);
                                    tempBankroll = tempBankroll + profit;
                                }
                            }
                        })
                    }
                    setPoint(roll);
                    setRollCount(rollCount + 1);
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 11:
                    console.log("Yo 11");
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'passBet' || e[0] === 'elevenBet' ||
                                e[0] === 'worldBet' || e[0] === 'fieldBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                        })
                    }
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                case 12:
                    console.log("Craps 12");
                    if (betsOn.length > 0) {
                        betsOn.map((e, index) => {
                            console.log(e);
                            if (e[0] === 'anycrapsBet' || e[0] === 'twelveBet' ||
                                e[0] === 'worldBet' || e[0] === 'fieldBet') {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                        })
                    }
                    setBankroll(bankroll + tempBankroll);
                    setTotalRollCount(totalRollCount + 1);
                    break;
                default:
                    break;
            }
        } else {
            if (roll === point) {
                console.log(`Winner!  -> ${point} Hit!`);
                if (betsOn.length > 0) {
                    betsOn.map((e) => {
                        if (e[0] === 'passBet' || e[0] === 'passOddsBet') {
                            const profit = settleBetWin(e);
                            tempBankroll = tempBankroll + profit;
                        } else if (e[0] === 'dontpassBet' || e[0] === 'dontpassOddsBet') {
                            settleBetLoss(e)
                            tempBankroll = tempBankroll - e[2];
                        }
                        switch (roll) {
                            case 4:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet' || e[0] === 'box4Bet' || e[0] === 'place4Bet' || e[0] === 'place4OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop13') {
                                            if ((left === 1 && right === 3) || (left === 3 && right === 1)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop22') {
                                            if ((left === 2 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                // setBankroll(bankroll + tempBankroll);
                                // setTotalRollCount(totalRollCount + 1);
                                break;
                            case 5:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet') {
                                            settleBetLoss(e)
                                            tempBankroll = tempBankroll - e[2];
                                        }
                                        if (e[0] === 'box5Bet' || e[0] === 'place5Bet' || e[0] === 'place5OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop14') {
                                            if ((left === 1 && right === 4) || (left === 4 && right === 1)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop23') {
                                            if ((left === 2 && right === 3) || (left === 3 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                // setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 6:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet') {
                                            settleBetLoss(e)
                                            tempBankroll = tempBankroll - e[2];
                                        }
                                        if (e[0] === 'box6Bet' || e[0] === 'place6Bet' || e[0] === 'place6OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop15') {
                                            if ((left === 1 && right === 5) || (left === 5 && right === 1)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop24') {
                                            if ((left === 2 && right === 4) || (left === 4 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop33') {
                                            if ((left === 3 && right === 3)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                // setBankroll(bankroll + tempBankroll);
                                // setTotalRollCount(totalRollCount + 1);
                                break;
                            case 8:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet') {
                                            settleBetLoss(e)
                                            tempBankroll = tempBankroll - e[2];
                                        }
                                        if (e[0] === 'box8Bet' || e[0] === 'place8Bet' || e[0] === 'place8OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop35') {
                                            if ((left === 3 && right === 5) || (left === 5 && right === 3)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop26') {
                                            if ((left === 2 && right === 6) || (left === 6 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop44') {
                                            if ((left === 4 && right === 4)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setBankroll(bankroll + tempBankroll);
                                // setTotalRollCount(totalRollCount + 1);
                                break;
                            case 9:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'box9Bet' || e[0] === 'place9Bet' || e[0] === 'place9OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop36') {
                                            if ((left === 3 && right === 6) || (left === 6 && right === 3)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop45') {
                                            if ((left === 4 && right === 5) || (left === 5 && right === 4)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 10:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet' || e[0] === 'box10Bet' || e[0] === 'place10Bet' || e[0] === 'place10OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop46') {
                                            if ((left === 4 && right === 6) || (left === 6 && right === 4)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop55') {
                                            if ((left === 5 && right === 5)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                // setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            default:
                                break;
                        }
                    })
                }
                setPoint(0);
                setRollCount(rollCount + 1);
                setBankroll(bankroll + tempBankroll);
                setTotalRollCount(totalRollCount + 1);
                setUniquePoints(uniquePoints + 1);
            } else if (roll === 7) {
                console.log(`Loser!  -> ${roll}...`);
                if (betsOn.length > 0) {
                    betsOn.map((e, index) => {
                        console.log(e);
                        if (e[0] === 'hop16Bet') {
                            if ((left === 1 && right === 6) || (left === 6 && right === 1)) {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                        }
                        if (e[0] === 'hop25Bet') {
                            if ((left === 2 && right === 5) || (left === 5 && right === 2)) {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                        }
                        if (e[0] === 'hop34Bet') {
                            if ((left === 3 && right === 4) || (left === 4 && right === 3)) {
                                const profit = settleBetWin(e);
                                tempBankroll = tempBankroll + profit;
                            }
                        }
                        if (e[0] === 'dontpassBet' || e[0] === 'dontpassOddsBet' || e[0] === 'anysevenBet' ||
                            e[0] === 'put4Bet' || e[0] === 'put5Bet' || e[0] === 'put6Bet' || e[0] === 'put8Bet' ||
                            e[0] === 'put9Bet' || e[0] === 'put10Bet' || e[0] === 'put4OddsBet' ||
                            e[0] === 'put5OddsBet' || e[0] === 'put6OddsBet' || e[0] === 'put8OddsBet' ||
                            e[0] === 'put9OddsBet' || e[0] === 'put10OddsBet' || e[0] === 'worldBet') {
                            const profit = settleBetWin(e);
                            tempBankroll = tempBankroll + profit;
                        } else {
                            settleBetLoss(e)
                            tempBankroll = tempBankroll - e[2];
                        }
                    })
                }
                setPoint(0);
                setRollCount(0);
                setBankroll(bankroll + tempBankroll);
                setCurrentBet(0);
                setTotalRollCount(totalRollCount + 1);
                setUniquePoints(0);
            } else {
                if (betsOn.length > 0) {
                    betsOn.map((e) => {
                        switch (roll) {
                            case 2:
                                console.log("Craps 2");
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'anycrapsBet' || e[0] === 'twoBet' || e[0] === 'worldBet' ||
                                            e[0] === 'dontpassBet' || e[0] === 'fieldBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                    })
                                }
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 3:
                                console.log("Craps 3");
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'anycrapsBet' || e[0] === 'threeBet' || e[0] === 'worldBet' ||
                                            e[0] === 'dontpassBet' || e[0] === 'fieldBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                    })
                                }
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 4:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet' || e[0] === 'box4Bet' || e[0] === 'place4Bet' || e[0] === 'place4OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop13Bet') {
                                            if ((left === 1 && right === 3) || (left === 3 && right === 1)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop22Bet') {
                                            if ((left === 2 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setPoint(roll);
                                //setRollCount(rollCount + 1);
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 5:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet') {
                                            settleBetLoss(e)
                                            tempBankroll = tempBankroll - e[2];
                                        }
                                        if (e[0] === 'box5Bet' || e[0] === 'place5Bet' || e[0] === 'place5OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop14Bet') {
                                            if ((left === 1 && right === 4) || (left === 4 && right === 1)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop23Bet') {
                                            if ((left === 2 && right === 3) || (left === 3 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setPoint(roll);
                                //setRollCount(rollCount + 1);
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 6:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet') {
                                            settleBetLoss(e)
                                            tempBankroll = tempBankroll - e[2];
                                        }
                                        if (e[0] === 'box6Bet' || e[0] === 'place6Bet' || e[0] === 'place6OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop15Bet') {
                                            if ((left === 1 && right === 5) || (left === 5 && right === 1)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop24Bet') {
                                            if ((left === 2 && right === 4) || (left === 4 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop33Bet') {
                                            if ((left === 3 && right === 3)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setPoint(roll);
                                //setRollCount(rollCount + 1);
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 8:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet') {
                                            settleBetLoss(e)
                                            tempBankroll = tempBankroll - e[2];
                                        }
                                        if (e[0] === 'box8Bet' || e[0] === 'place8Bet' || e[0] === 'place8OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop35Bet') {
                                            if ((left === 3 && right === 5) || (left === 5 && right === 3)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop26Bet') {
                                            if ((left === 2 && right === 6) || (left === 6 && right === 2)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop44Bet') {
                                            if ((left === 4 && right === 4)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setPoint(roll);
                                //setRollCount(rollCount + 1);
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 9:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'box9Bet' || e[0] === 'place9Bet' || e[0] === 'place9OddsBet' || e[0] === 'fieldBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop36Bet') {
                                            if ((left === 3 && right === 6) || (left === 6 && right === 3)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop45Bet') {
                                            if ((left === 4 && right === 5) || (left === 5 && right === 4)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setPoint(roll);
                                //setRollCount(rollCount + 1);
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 10:
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'fieldBet' || e[0] === 'box10Bet' || e[0] === 'place10Bet' || e[0] === 'place10OddsBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                        if (e[0] === 'hop46Bet') {
                                            if ((left === 4 && right === 6) || (left === 6 && right === 4)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                        if (e[0] === 'hop55Bet') {
                                            if ((left === 5 && right === 5)) {
                                                const profit = settleBetWin(e);
                                                tempBankroll = tempBankroll + profit;
                                            }
                                        }
                                    })
                                }
                                //setPoint(roll);
                                //setRollCount(rollCount + 1);
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 11:
                                console.log("Yo 11");
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'passBet' || e[0] === 'elevenBet' ||
                                            e[0] === 'worldBet' || e[0] === 'fieldBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                    })
                                }
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            case 12:
                                console.log("Craps 12");
                                if (betsOn.length > 0) {
                                    betsOn.map((e, index) => {
                                        console.log(e);
                                        if (e[0] === 'anycrapsBet' || e[0] === 'twelveBet' ||
                                            e[0] === 'worldBet' || e[0] === 'fieldBet') {
                                            const profit = settleBetWin(e);
                                            tempBankroll = tempBankroll + profit;
                                        }
                                    })
                                }
                                //setBankroll(bankroll + tempBankroll);
                                //setTotalRollCount(totalRollCount + 1);
                                break;
                            default:
                                break;
                        }
                    })
                }
                setRollCount(rollCount + 1);
                setTotalRollCount(totalRollCount + 1);
            }
        }

    }
    //  ************************************************************
    const checkRoll = (roll, left, right) => {
        if (rollCount === 0) {
            checkBets(true, roll, left, right)
        } else {
            checkBets(false, roll, left, right)
        }
    }
    //  ************************************************************
    const rollDice = () => {
        let left = Math.floor(Math.random() * 6) + 1;
        let right = Math.floor(Math.random() * 6) + 1;
        setLeftDie(left);
        setRightDie(right);
        let total = [left, right, left + right];
        checkRoll(left + right, left, right);
        setTotalRollCount(totalRollCount + 1);
        setRollList([...rollList, total]);
    }
    //  ************************************************************
    const betsDown = () => {
        const refund = currentBet;
        setRackAmount(rackAmount + refund);
        setCurrentBet(0);
        setPassBet(0);
        setPassOddsBet(0);
        setDontpassBet(0);
        setDontpassOddsBet(0);
        setComeBet(0);
        setDontcomeBet(0);
        setFieldBet(0);
        setAnycrapsBet(0);
        setAnysevenBet(0);
        setHard4Bet(0);
        setHard6Bet(0);
        setHard8Bet(0);
        setHard10Bet(0);
        setTwoBet(0);
        setThreeBet(0);
        setElevenBet(0);
        setTwelveBet(0);
        setBox4Bet(0);
        setBox5Bet(0);
        setBox6Bet(0);
        setBox8Bet(0);
        setBox9Bet(0);
        setBox10Bet(0);
        setPlace4Bet(0);
        setPlace5Bet(0);
        setPlace6Bet(0);
        setPlace8Bet(0);
        setPlace9Bet(0);
        setPlace10Bet(0);
        setPut4Bet(0);
        setPut5Bet(0);
        setPut6Bet(0);
        setPut8Bet(0);
        setPut9Bet(0);
        setPut10Bet(0);
        setPlace4OddsBet(0);
        setPlace5OddsBet(0);
        setPlace6OddsBet(0);
        setPlace8OddsBet(0);
        setPlace9OddsBet(0);
        setPlace10OddsBet(0);
        setPut4OddsBet(0);
        setPut5OddsBet(0);
        setPut6OddsBet(0);
        setPut8OddsBet(0);
        setPut9OddsBet(0);
        setPut10OddsBet(0);
        setSmallBet(0);
        setAllBet(0);
        setTallBet(0);
        setHop13Bet(0);
        setHop22Bet(0);
        setHop23Bet(0);
        setHop14Bet(0);
        setHop15Bet(0);
        setHop24Bet(0);
        setHop33Bet(0);
        setHop44Bet(0);
        setHop35Bet(0);
        setHop26Bet(0);
        setHop36Bet(0);
        setHop45Bet(0);
        setHop46Bet(0);
        setHop55Bet(0);
        setHop16Bet(0);
        setHop25Bet(0);
        setHop34Bet(0);
        setWorldBet(0);
        setFireBet(0);
        setRepeater2Bet(0);
        setRepeater3Bet(0);
        setRepeater4Bet(0);
        setRepeater5Bet(0);
        setRepeater6Bet(0);
        setRepeater8Bet(0);
        setRepeater9Bet(0);
        setRepeater10Bet(0);
        setRepeater11Bet(0);
        setRepeater12Bet(0);
    }
    //  ************************************************************
    return (
        <div className='main-container'>
            <div className='left-side'>
                <div className='bubble'>
                    <Bubble left={leftDie} right={rightDie} rollDice={rollDice} />
                </div>
                <div className='rolls'>
                    <RollList rollList={rollList} />
                </div>
            </div>
            <div className='game-board'>
                <div className='repeater-numbers'>
                    <span>REPEATERS</span>
                    <BetContainer bet={'repeater2'} changeBet={changeBet} value={repeater2Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater3'} changeBet={changeBet} value={repeater3Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater4'} changeBet={changeBet} value={repeater4Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater5'} changeBet={changeBet} value={repeater5Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater6'} changeBet={changeBet} value={repeater6Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater8'} changeBet={changeBet} value={repeater8Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater9'} changeBet={changeBet} value={repeater9Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater10'} changeBet={changeBet} value={repeater10Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater11'} changeBet={changeBet} value={repeater11Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <BetContainer bet={'repeater12'} changeBet={changeBet} value={repeater12Bet} betAmount={betAmount} decrease={decreaseBets} />
                    <span>REPEATERS</span>
                </div>
                <div className='box-numbers'>
                    <div className='place-puts'>
                        <BetContainer bet={'put-4'} changeBet={changeBet} value={put4Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'put-4-odds'} changeBet={changeBet} value={put4OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'put-5'} changeBet={changeBet} value={put5Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'put-5-odds'} changeBet={changeBet} value={put5OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'put-6'} changeBet={changeBet} value={put6Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'put-6-odds'} changeBet={changeBet} value={put6OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'put-8'} changeBet={changeBet} value={put8Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'put-8-odds'} changeBet={changeBet} value={put8OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'put-9'} changeBet={changeBet} value={put9Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'put-9-odds'} changeBet={changeBet} value={put9OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'put-10'} changeBet={changeBet} value={put10Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'put-10-odds'} changeBet={changeBet} value={put10OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <BetContainer bet={'box-4'} changeBet={changeBet} value={box4Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} point={point} />
                    <BetContainer bet={'box-5'} changeBet={changeBet} value={box5Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} point={point} />
                    <BetContainer bet={'box-6'} changeBet={changeBet} value={box6Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} point={point} />
                    <BetContainer bet={'box-8'} changeBet={changeBet} value={box8Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} point={point} />
                    <BetContainer bet={'box-9'} changeBet={changeBet} value={box9Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} point={point} />
                    <BetContainer bet={'box-10'} changeBet={changeBet} value={box10Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} point={point} />
                    <div className='place-puts'>
                        <BetContainer bet={'place-4'} changeBet={changeBet} value={place4Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'place-4-odds'} changeBet={changeBet} value={place4OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'place-5'} changeBet={changeBet} value={place5Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'place-5-odds'} changeBet={changeBet} value={place5OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'place-6'} changeBet={changeBet} value={place6Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'place-6-odds'} changeBet={changeBet} value={place6OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'place-8'} changeBet={changeBet} value={place8Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'place-8-odds'} changeBet={changeBet} value={place8OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'place-9'} changeBet={changeBet} value={place9Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'place-9-odds'} changeBet={changeBet} value={place9OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                    <div className='place-puts'>
                        <BetContainer bet={'place-10'} changeBet={changeBet} value={place10Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <BetContainer bet={'place-10-odds'} changeBet={changeBet} value={place10OddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>
                </div>
                <div className='front-all'>
                    <div className='middle-section'>
                        <BetContainer bet={'anyseven'} changeBet={changeBet} value={anysevenBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <div className='middle-boxes'>
                            <BetContainer bet={'hard-6'} changeBet={changeBet} value={hard6Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hard-8'} changeBet={changeBet} value={hard8Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <div className='middle-boxes'>
                            <BetContainer bet={'hard-4'} changeBet={changeBet} value={hard4Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hard-10'} changeBet={changeBet} value={hard10Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <div className='middle-boxes'>
                            <BetContainer bet={'two'} changeBet={changeBet} value={twoBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'ace-deuce'} changeBet={changeBet} value={threeBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <div className='middle-boxes'>
                            <BetContainer bet={'eleven'} changeBet={changeBet} value={elevenBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'twelve'} changeBet={changeBet} value={twelveBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <BetContainer bet={'anycraps'} changeBet={changeBet} value={anycrapsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                    </div>

                    <div className='bonus-section'>
                        <div className='ats'>
                            <BetContainer bet={'small'} changeBet={changeBet} value={smallBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'all'} changeBet={changeBet} value={allBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'tall'} changeBet={changeBet} value={tallBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <div className='hops'>
                            <BetContainer bet={'hop13'} changeBet={changeBet} value={hop13Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop14'} changeBet={changeBet} value={hop14Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop15'} changeBet={changeBet} value={hop15Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop35'} changeBet={changeBet} value={hop35Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop36'} changeBet={changeBet} value={hop36Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop46'} changeBet={changeBet} value={hop46Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <div className='blank' />
                            <BetContainer bet={'hop23'} changeBet={changeBet} value={hop23Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop24'} changeBet={changeBet} value={hop24Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop26'} changeBet={changeBet} value={hop26Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop45'} changeBet={changeBet} value={hop45Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <div className='blank' />
                            <BetContainer bet={'hop22'} changeBet={changeBet} value={hop22Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <div className='blank' />
                            <BetContainer bet={'hop33'} changeBet={changeBet} value={hop33Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop44'} changeBet={changeBet} value={hop44Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <div className='blank' />
                            <BetContainer bet={'hop55'} changeBet={changeBet} value={hop55Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <div className='hop-sevens'>
                            <BetContainer bet={'hop16'} changeBet={changeBet} value={hop16Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop25'} changeBet={changeBet} value={hop25Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'hop34'} changeBet={changeBet} value={hop34Bet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <div className='other-bets'>
                            <BetContainer bet={'world'} changeBet={changeBet} value={worldBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'fire'} changeBet={changeBet} value={fireBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                    </div>

                    <div className='front-section'>
                        <div className='front-line'>
                            <BetContainer bet={'come'} rollCount={rollCount} changeBet={changeBet} value={comeBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'dontcome'} rollCount={rollCount} changeBet={changeBet} value={dontcomeBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            {!point ? <img src={puckOff} style={{ height: '50px', width: '50px', position: 'absolute', right: '0' }} /> : null}
                        </div>
                        <BetContainer bet={'field'} changeBet={changeBet} value={fieldBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        <div className='front-line'>
                            <BetContainer bet={'dontpass-odds'} changeBet={changeBet} value={dontpassOddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'dontpass'} changeBet={changeBet} value={dontpassBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                        <div className='front-line'>
                            <BetContainer bet={'pass-odds'} changeBet={changeBet} value={passOddsBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                            <BetContainer bet={'pass'} changeBet={changeBet} value={passBet} betAmount={betAmount} decrease={decreaseBets} winner={isWinner} winAmount={winAmount} />
                        </div>
                    </div>
                </div>
                <div className='rack'>
                    <div className='rack-chip' onClick={() => setDecreaseBets(!decreaseBets)}>
                        <p> <b>{decreaseBets ? '-' : '+'}</b></p>
                    </div>
                    <div className='rack-chip'>
                        <img onClick={() => setBetAmount(1)} src={chipWhite} style={betAmount === 1 ? { height: '45px', width: '45px', borderRadius: '50%', boxShadow: '0px 0px 12px 4px rgba(223,245,255,.75)' } : { height: '40px', width: '40px' }} />
                    </div>
                    <div className='rack-chip'>
                        <img onClick={() => setBetAmount(5)} src={chipRed} style={betAmount === 5 ? { height: '45px', width: '45px', borderRadius: '50%', boxShadow: '0px 0px 12px 4px rgba(223,245,255,.75)' } : { height: '40px', width: '40px' }} />
                    </div>
                    <div className='rack-chip'>
                        <img onClick={() => setBetAmount(25)} src={chipGreen} style={betAmount === 25 ? { height: '45px', width: '45px', borderRadius: '50%', boxShadow: '0px 0px 12px 4px rgba(223,245,255,.75)' } : { height: '40px', width: '40px' }} />
                    </div>
                    <div className='rack-chip'>
                        <img onClick={() => setBetAmount(100)} src={chipBlack} style={betAmount === 100 ? { height: '45px', width: '45px', borderRadius: '50%', boxShadow: '0px 0px 12px 4px rgba(223,245,255,.75)' } : { height: '40px', width: '40px' }} />
                    </div>
                    <div className='rack-chip'>
                        <img onClick={() => setBetAmount(500)} src={chipPurple} style={betAmount === 500 ? { height: '45px', width: '45px', borderRadius: '50%', boxShadow: '0px 0px 12px 4px rgba(223,245,255,.75)' } : { height: '40px', width: '40px' }} />
                    </div>
                    <div className='rack-chip'>
                        <img onClick={() => setBetAmount(1000)} src={chipYellow} style={betAmount === 1000 ? { height: '45px', width: '45px', borderRadius: '50%', boxShadow: '0px 0px 12px 4px rgba(223,245,255,.75)' } : { height: '40px', width: '40px' }} />
                    </div>
                    <div >
                        <span>${betAmount}</span>
                        <button onClick={() => betsDown()}>ALL DOWN</button>
                    </div>
                    {isWinner ?
                        <div className='winner'>WON: ${winAmount[0]} : {winAmount[1]}</div>
                        :
                        null
                    }
                </div>

            </div>

            <div className='right-side'>

                <span>
                    {rollCount}
                </span>
                <span>
                    {point}
                </span>
                <span>
                    {totalRollCount}
                </span>
                <div className='bankroll'>
                    <PlayerRack
                        player={player}
                        shooterProfit={shooterProfit}
                        currentBet={currentBet}
                        rackAmount={rackAmount}
                        bankroll={bankroll}
                        totalNet={totalNet}
                    />
                </div>

                <div className='menu'>
                    <GameMenu />

                </div>
            </div>
        </div>

    )
}

export default GameBoard