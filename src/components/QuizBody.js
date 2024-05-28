import React from "react";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import { BpRadio } from "./CustomBpRadio";
import { CustomChip } from "./CustomChip";

export const QuizBody = ({ setReponse, title, question, responses, validResponse, setNextQuestion, nextQuestionButton }) => {
    const [value, setValue] = React.useState('');
    const [correctValue, setCorrectValue] = React.useState(null);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [nextQuestionDisabled, setnextQuestionDisabled] = React.useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        setReponse(value);
        setCorrectValue(value === validResponse);
        setFormSubmitted(true);
        setnextQuestionDisabled(false);
    };

    const handleNextQUestion = (event) => {
        setNextQuestion();
        setFormSubmitted(false);
        setCorrectValue(null);
        setnextQuestionDisabled(true);
    }

    const handleRadioChange = (event) => {
        if (formSubmitted) {
            return;
        }
        setValue(event.target.value);
    };

    return (
        <div className="quizBody">
            <React.Fragment>
                <Grid>
                    <Grid item xs={12}>
                        <div>
                            <Typography mt={3} variant="h6" gutterBottom sx={{ color: "white" }}>
                                {title}
                            </Typography>
                            <Typography mt={4} variant="subtitle1" gutterBottom className="quizText">
                                {question}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "2%" }}>
                        <Divider variant="middle" sx={{ color: "white" }}>Отговори:</Divider>
                    </Grid>
                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            <FormControl sx={{ m: 3 }} error={false} variant="standard">
                                <RadioGroup
                                    aria-labelledby="demo-error-radios"
                                    name="quiz"
                                    value={value}
                                    onChange={handleRadioChange}
                                    disabled={formSubmitted}
                                >
                                    <FormControlLabel id={responses[0] === validResponse ? "testId" : undefined} className="quizText" value={responses[0]} control={<BpRadio validResponse={correctValue} />} label={responses[0]} />
                                    <FormControlLabel id={responses[1] === validResponse ? "testId" : undefined} className="quizText" value={responses[1]} control={<BpRadio validResponse={correctValue} />} label={responses[1]} />
                                    <FormControlLabel id={responses[2] === validResponse ? "testId" : undefined} className="quizText" value={responses[2]} control={<BpRadio validResponse={correctValue} />} label={responses[2]} />
                                </RadioGroup>
                                <Stack direction="row" spacing={2}>
                                    <CustomChip className="submitChip" style={{ marginTop: "15px" }} label="Потвърди" variant="outlined" color="default" disabled={value ? false : true} onClick={handleSubmit} />
                                    <CustomChip className="submitChip" style={{ marginTop: "15px" }} label={nextQuestionButton} variant="outlined" color="default" disabled={nextQuestionDisabled} onClick={handleNextQUestion} />
                                </Stack>
                            </FormControl>
                        </form>
                    </Grid>
                </Grid>
            </React.Fragment>
        </div>
    )
};
