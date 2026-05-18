import {Box, Stack, Typography} from "@mui/material";
import type {Project} from "../utils/types.ts";
import {useNavigate} from "react-router-dom";

interface Props {
    project: Project;
}

export function ProjectSummary({project}: Readonly<Props>) {
    const placeholder = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
    const navigate = useNavigate();
    const BORDER_RADIUS = 15;
    return (
        <Stack direction="column" onClick={() => navigate(project.link ?? "/projects")} sx={{
            width: 400,
            height: 450,
            bgcolor: "background.paper",
            borderRadius: BORDER_RADIUS,
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            margin: "20px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "transform 0.2s ease",
            "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.6)",
            },
            textAlign: "left",
            
        }}>
            <img 
                src={project.thumbnail} 
                alt={project.title + " thumbnail"} 
                style={{ borderRadius: `${BORDER_RADIUS}px ${BORDER_RADIUS}px 0 0`, objectFit: "cover" }}
                width={400}
                height={200}
            />
            <Box sx={{margin: "10px"}}>
                <Stack direction="row" sx={{justifyContent: "space-between"}}>
                    <Typography variant="h5" component="div">{project.title}</Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 -2 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-external-link">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                        <path d="M11 13l9 -9" />
                        <path d="M15 4h5v5" />
                    </svg>
                </Stack>
                <Typography component="p">{project.description ?? placeholder}</Typography>
            </Box>
        </Stack>
    )
}