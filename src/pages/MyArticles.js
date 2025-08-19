import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Pagination, Box, } from "@mui/material";

const articles = [
    { title: "The Art of Storytelling: A Guide to Captivating Your Audience", status: "Published", edited: "2 days ago" },
    { title: "Crafting Compelling Characters: A Step-by-Step Approach", status: "Draft", edited: "1 week ago" },
    { title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations", status: "Published", edited: "2 weeks ago" },
    { title: "World Building Essentials: Creating Immersive Settings", status: "Draft", edited: "3 weeks ago" },
    { title: "Finding Your Writing Voice: Tips for Authentic Narration", status: "Published", edited: "1 month ago" },
    { title: "Overcoming Writer’s Block: Strategies to Stay Creative", status: "Draft", edited: "2 months ago" },
    { title: "Editing Like a Pro: Self-Editing Tips for Writers", status: "Published", edited: "3 months ago" },
    { title: "How to Write Engaging Dialogue That Flows", status: "Draft", edited: "4 months ago" },
    { title: "The Writer’s Routine: Building Consistency in Creativity", status: "Published", edited: "5 months ago" },
];

const getStatusChip = (status) => {
    switch (status) {
        case "Published":
            return <Chip label="Published" color="success" variant="outlined" size="small" />;
        case "Draft":
            return <Chip label="Draft" color="warning" variant="outlined" size="small" />;
        default:
            return <Chip label={status} variant="outlined" size="small" />;
    }
};

const MyArticles = () => {
    const [page, setPage] = useState(1);
    const rowsPerPage = 3;

    const startIndex = (page - 1) * rowsPerPage;
    const paginatedArticles = articles.slice(startIndex, startIndex + rowsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <Box>
            <TableContainer component={Paper} sx={{ borderRadius: 3, mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Title</strong></TableCell>
                            <TableCell><strong>Status</strong></TableCell>
                            <TableCell><strong>Last Edited</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedArticles.map((article, index) => (
                            <TableRow key={index}>
                                <TableCell>{article.title}</TableCell>
                                <TableCell>{getStatusChip(article.status)}</TableCell>
                                <TableCell>{article.edited}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box display="flex" justifyContent="center">
                <Pagination
                    count={Math.ceil(articles.length / rowsPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    shape="rounded"
                />
            </Box>
        </Box>
    );
};

export default MyArticles;
