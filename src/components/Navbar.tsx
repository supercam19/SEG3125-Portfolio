import {
    AppBar,
    Box,
    Switch,
    Typography,
} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

interface NavbarProps {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void,
}

export function NavbarContent({ 
  darkMode, 
  setDarkMode,
}: NavbarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <AppBar
            position="fixed"
            elevation={6}
            sx={{
                top: "2vh",
                left: "50%",
                transform: "translateX(-50%)",
                minWidth: "600px",
                width: "80vw",
                maxWidth: "1100px",
                borderRadius: "999px",
                backgroundColor: "background.paper",
                color: "text.primary",
                px: 3,
                py: 0.75,
                boxShadow: darkMode
                    ? "0 8px 32px rgba(0,0,0,0.6)"
                    : "0 8px 32px rgba(0,0,0,0.12)",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    minHeight: 48,
                }}
            >
                <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" noWrap sx={{ fontSize: 20 }}>
                        Cameron Labelle
                    </Typography>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 3,
                    }}
                >
                    {["Home", "Projects", "Contact"].map((label) => (
                        <Typography
                            key={label}
                            variant="body1"
                            sx={{
                                cursor: "pointer",
                                fontWeight: 500,
                                opacity: label.toLowerCase() === location.pathname.substring(1) ? 1 : 0.8,
                                "&:hover": { opacity: 1 },
                                transition: "opacity 0.2s",
                                position: "relative",
                                pb: 0.5,
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: 0,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: label.toLowerCase() === location.pathname.substring(1) ? "100%" : "0%",
                                    height: "2px",
                                    backgroundColor: "primary.main",
                                    transition: "width 0.3s cubic-bezier(0.0, 0.0, 0.2, 1)",
                                },
                                "&:hover::after": {
                                    width: "100%",
                                },
                            }}
                            onClick={() => {navigate(label.toLowerCase())}}
                        >
                            {label}
                        </Typography>
                    ))}
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: 1,
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="icon icon-tabler icons-tabler-outline icon-tabler-sun">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                        <path
                            d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>
                    </svg>
                    <Switch
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                        size="small"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"/>
                        <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
                        <path d="M19 11h2m-1 -1v2"/>
                    </svg>
                </Box>
            </Box>
        </AppBar>
    );
}
