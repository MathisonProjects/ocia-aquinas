import Head from "next/head";
import { Container, Typography, Grid2, Select, MenuItem } from "@mui/material";
import DefaultTemplate from "@/components/DefaultTemplate";
import { useState } from "react";
import lessonPlan from "@/data/LessonPlan.json";

export default function EducationMaterial() {
  const [lesson, setLesson] = useState<any>(lessonPlan[0]);

  const lessons: any[] = lessonPlan.map((lesson) => lesson);

  return (
    <>
      <Head>
        <title>Education Material - {lesson.title}</title>
        <meta name="description" content="Education Material for OCIA" />
      </Head>
      <DefaultTemplate>
        <Container>
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Typography variant="h4" gutterBottom>
                  Education Material
                </Typography>
            </Grid2>
            <Grid2 size={6}>
                <Select
                  value={lesson}
                  onChange={(e) => setLesson(e.target.value)}
                  sx={{ backgroundColor: 'white', color: 'black' }}
                  fullWidth
                >
                {lessons.map((lesson) => (
                  <MenuItem key={lesson.lesson} value={lesson} style={{ backgroundColor: 'white', color: 'black' }}>
                    Lesson {lesson.lesson} - {lesson.title}
                  </MenuItem>
                ))}
              </Select>
            </Grid2>
          </Grid2>
          <Grid2>
            {lesson.text.map((text: string) => (
              <Typography key={text} variant="body1" gutterBottom dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </Grid2>
        </Container>
      </DefaultTemplate>
    </>
  );
}
