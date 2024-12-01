import Head from "next/head";
import { Container, Typography, CssBaseline, List, ListItem, ListItemText, Grid2, Select, MenuItem } from "@mui/material";
import DefaultTemplate from "@/components/DefaultTemplate";
import { useState, useEffect } from "react";
import BibleData from "@/data/EntireBible-CPDV.json";

export default function Bible() {
  const [book, setBook] = useState<string>("Genesis");
  const [chapter, setChapter] = useState<string>("1");
  const bibleData: any = BibleData;
  const books: string[] = Object.keys(BibleData);
  
  useEffect(() => {
    setChapter("1");
  }, [book]);

  return (
    <>
      <Head>
        <title>Bible - {book} {chapter}</title>
        <meta name="description" content="Bible - Catholic Public Domain Version" />
      </Head>
      <DefaultTemplate>
        <Container>
        <Grid2 container spacing={2}>
            <Grid2 size={6} display="flex" justifyContent="center">
                <Select value={book} onChange={(e) => setBook(e.target.value)} sx={{ backgroundColor: 'white', color: 'black' }}>
                    {books.map((bookName) => (
                      <MenuItem key={bookName} value={bookName} style={{ backgroundColor: 'white', color: 'black' }}>
                        Book of {bookName}
                      </MenuItem>
                    ))}
                </Select>
            </Grid2>
            <Grid2 size={6} display="flex" justifyContent="center">
                <Select value={chapter} onChange={(e) => setChapter(e.target.value)} sx={{ backgroundColor: 'white', color: 'black' }}>
                    {Array.from({ length: Object.keys(bibleData[book]).length }, (_, i) => i + 1).map((chapterNumber) => (
                        <MenuItem key={chapterNumber} value={chapterNumber} style={{ backgroundColor: 'white', color: 'black' }}>
                            Chapter {chapterNumber}
                        </MenuItem>
                    ))}
                </Select>
            </Grid2>
        </Grid2>
        <Typography variant="h4">
            <List sx={{ 'paddingBottom': '32px' }}>
                {Object.keys(bibleData[book][chapter]).map((verseNumber) => (
                    <ListItem key={verseNumber}>
                        <ListItemText primary={<><strong>{verseNumber}:</strong> {bibleData[book][chapter][verseNumber]}</>} />
                    </ListItem>
                ))}
            </List>
        </Typography>
        </Container>
      </DefaultTemplate>
    </>
  );
}
