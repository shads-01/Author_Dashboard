import React from "react";
import { Card, CardContent, Avatar, Typography, Box, Divider } from "@mui/material";

const Profile = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                mt: 4,
            }}
        >
            <Card
                sx={{
                    maxWidth: 400,
                    p: 2,
                    borderRadius: 3,
                    boxShadow: 4,
                    textAlign: "center",
                }}
            >
                <Avatar
                    alt="Shahadat Hasan"
                    src="https://tenor.com/view/gasp-shock-scared-psyduck-pokemon-gif-25805348.gif"
                    sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
                />

                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Shahadat Hasan
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        shahadat.cse.20230104008@aust.edu
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" color="text.secondary">
                        Joined on: <strong>15/8/2025</strong>
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Profile;
