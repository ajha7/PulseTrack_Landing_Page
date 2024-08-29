import React from "react";
import './Topbar.css'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const Logo = styled('img')({
    height: '40px',
    width: '50px',
    marginRight: '16px',
  });

export default function Topbar () {

    return (
        <AppBar position="static" id="topbar-appbar">
          <Toolbar>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              
              <div  id="pulsetrack-logo" style={{ display: 'flex' }}>
                <Logo src={require("../../Images/pulse-track-logo-without-background.png")} alt="PulseTrack Logo"/>
                <Typography variant="h6" component="div">
                  <span id="pulsetrack-text"> PulseTrack </span>
                </Typography>
              </div>

              <div id="topbar-buttons">

                <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">How it Works</Button>
                <Button
                    color="inherit"
                    component="a"
                    href="https://docs.google.com/forms/d/1qNZEZtClQebE0PueXLY_6c2ovhcdT9XXrHmrH0jCvQA/edit?ts=66c84452"
                >
                    Contact
                </Button>

              </div>
              
            </Container>
          </Toolbar>
        </AppBar>
      );

}