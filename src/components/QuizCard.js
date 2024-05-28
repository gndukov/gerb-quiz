import React from "react";
import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import { QuizBody } from "./QuizBody";
import { Portal } from "./Portal"
import { QUESTIONS } from "../questions/questions"
import { Container, Box, Typography } from '@mui/material';
import { Graph } from './AnswersGraph';

export const QuizCard = () => {
    const [response, setReponse] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [showGraph, setShowGraph] = React.useState(false);
    const [correct, setCorrect] = React.useState(0);
    const [incorrect, setIncorrect] = React.useState(0);
    const [nextButtonname, setNextButtonName] = React.useState("Следващ въпрос");

    const [currentQuestionNumber, setcurrentQuestionNumber] = React.useState(0);
    const [currentQuestion, setCurrentQuestion] = React.useState(QUESTIONS[0]);


    const setNextQuestion = () => {
        setOpen(false);
        const number = 1 + currentQuestionNumber;
        if (number < QUESTIONS.length) {
            validateAnswer();
            setcurrentQuestionNumber(number);
            setCurrentQuestion(QUESTIONS[number]);
            if (number === QUESTIONS.length - 1) {
                setNextButtonName("Резултати");
            }
        } else {
            setShowGraph(true);
        }

    }

    const validateAnswer = () => {
        if (currentQuestion.correctAnswer === response) {
            setCorrect(correct + 1);
        } else {
            setIncorrect(incorrect + 1);
        }
    }

    return (
        <div >
            <Grid>
                <Paper className="quizCard" elevation={3} sx={{ bgcolor: "rgba(255, 255, 255, 0.2)" }}>
                    <div>

                        {
                            showGraph ?
                                <div style={{ paddingTop: "2%" }}>
                                    <Graph
                                        text={"Резултати:"}
                                        correct={correct}
                                        incorrect={incorrect}
                                    />
                                </div>
                                :
                                <QuizBody
                                    setReponse={(text) => {
                                        setReponse(text);
                                        setOpen(true);
                                    }}
                                    responses={currentQuestion.answers}
                                    question={
                                        currentQuestion.question
                                    }
                                    title={
                                        `Въпрос №${currentQuestionNumber + 1}`
                                    }
                                    validResponse={
                                        currentQuestion.correctAnswer
                                    }
                                    nextQuestionButton={nextButtonname}
                                    setNextQuestion={setNextQuestion}
                                />
                        }
                    </div>

                </Paper>
            </Grid>
            <div>
                {open ? <Portal
                    incorrect={response !== currentQuestion.correctAnswer}
                    alertText={currentQuestion.hint}
                /> : null}
            </div>
        </div>
    );
};