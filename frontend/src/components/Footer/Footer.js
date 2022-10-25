import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const dealers = [
  "Ace Backstage",
  "Akai",
  "AKG Acoustics",
  "Alesis",
  "Allen-Heath",
  "Altman",
  "American DJ",
  "Ampeg",
  "Amphenol/Socapex",
  "Anchor Audio",
  "Ansmann",
  "APB DynaSonics",
  "Aphex",
  "Apogee",
  "ART",
  "Ashly",
  "Astatic",
  "Ateis by Penton",
  "Atlas Sound",
  "Atlona",
  "ATM Fly-ware",
  "Audica Professional",
  "Audio Spectrum",
  "Audio-Technica",
  "Audiofly",
  "Audix",
  "Auralex",
  "Australian Monitor",
  "Avid",
  "Aviom",
  "Avlex",
  "Avolites",
  "Barco",
  "BBE",
  "Behringer",
  "Beyerdynamic",
  "Bi-Amp",
  "BLACK BOX",
  "Blizzard Lighting",
  "Blue Microphones",
  "Bogen",
  "Bosch",
  "Bose",
  "BSS",
  "Bugera",
  "CAD Audio",
  "Casio",
  "CBI",
  "Cerwin Vega",
  "Chauvet Lighting",
  "Chief",
  "Chroma-Q",
  "City Theatrical",
  "Clear-Com",
  "ClearOne",
  "Clearsonic",
  "Clock Audio",
  "Color Kinetics",
  "CM Works",
  "Crouse-Hings",
  "Community Pro",
  "Cosmic Truss",
  "Countryman",
  "Crest Audio",
  "Crown",
  "D.A.S. Audio",
  "Da-Lite",
  "Datavideo",
  "dB Technologies",
  "dbx Professional",
  "Denon (Denon DJ)",
  "DiGiCo",
  "Doppler Labs",
  "Doug Fleenor Design",
  "DPA Mircophones",
  "Dura-Flex",
  "DrumFire",
  "Dynaudio Acoustics",
  "Earthworks",
  "EAW",
  "Elation & Antari",
  "Electro-Voice (EV)",
  "ETC",
  "Eminence",
  "Entertainment Industry Tape",
  "Entertainment Power Systems",
  "EZ Dupe",
  "FBT",
  "Fishman",
  "Fostex",
  "FSR",
  "Furman",
  "Gafftech",
  "Galaxy Audio",
  "General/Carol Cable",
  "Gig Gear",
  "Global Truss (Dura Truss)",
  "Grundorf",
  "Hartke",
  "Hear Technologies",
  "Heil",
  "Hennessey",
  "High End Systems",
  "Hosa Technology",
  "Hot Wires",
  "Hubble",
  "In-Line Audio",
  "Intellistage",
  "James Thomas Engineering",
  "Jawbone",
  "JB-Lighting",
  "JBL",
  "Juice Goose",
  "K-array",
  "Klang Technologies",
  "Klark Teknik",
  "Klipsch",
  "KORG",
  "Kramer",
  "KRK",
  "Lab Gruppen",
  "LD Systems",
  "Lee Filters",
  "Leprecon",
  "Leviton NSI",
  "Lexicon",
  "The Light Source",
  "Line 6",
  "Listen",
  "Littlite",
  "Lowell",
  "Lycian",
  "MA Lighting",
  "Mackie",
  "Marantz",
  "Marathon",
  "Martin Audio",
  "Martin Pro (Martin Lighting)",
  "MEE",
  "Midas",
  "Middle Atlantic Products",
  "Mipro",
  "Mogan",
  "Monster",
  "Mukikim",
  "MXL",
  "Nady Systems",
  "NEUMANN",
  "Neutrik",
  "Nexo",
  "Northern Case",
  "Numark",
  "Odyssey",
  "Olympus",
  "On-Stage",
  "One Systems",
  "Osram-Sylvania",
  "Outline",
  "OWI Inc.",
  "Palmer",
  "Pathway Connectivity",
  "Peavey",
  "Peerless Mounts",
  "Pelican Products",
  "Penton",
  "Peterson Tuners",
  "Phase 3 Connectors",
  "Philips",
  "Point Source",
  "Powersoft",
  "Presonus",
  "Pro Co",
  "Pro X",
  "QSC",
  "Quam",
  "Radial Engineering",
  "Rane",
  "RapcoHorizon",
  "Raxxess",
  "RCF",
  "RDL",
  "Reel EFX",
  "Renkus Heinz",
  "RFvenue",
  "RME",
  "Road Ready",
  "Robe Lighting",
  "Roland",
  "Rolls Corporation",
  "Rosco",
  "Sabine",
  "Samson",
  "Schaller",
  "SE Electronics",
  "Sennheiser",
  "SGM",
  "Shure",
  "SKB",
  "Skjonberg Controls",
  "Soundcraft",
  "Soundsphere",
  "SoundTube",
  "Stanton",
  "Stewart",
  "Superlux",
  "SuperScope",
  "Surgex",
  "Suspension Solutions",
  "Switchcraft",
  "Symetric",
  "Tannoy",
  "Tascam",
  "TC Electronic",
  "TC Helicon",
  "Teac",
  "Telefunken Elektroakustik",
  "Telex",
  "Toa",
  "Trusst",
  "Turbosound",
  "Ultimate Support",
  "Ultratec",
  "Ushio",
  "Vari-Lite",
  "VMB Prolifts",
  "Vue Audiotechnik",
  "West Penn",
  "Westone",
  "Whirlwind",
  "Williams Sound",
  "Yamaha Commercial Audio",
  "Yorvkille",
];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        SLM Entertainment
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        Height: "40vh",
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            mb: 4,
          }}
        >
          Authorized Dealer For 200+ Brands of audio and lighting equipment
        </Typography>
        <Typography
          variant="h5"
          className="Brand-Items"
          component="h2"
          gutterBottom
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            lineHeight: ".2rem",
            fontSize: ".15rem",
            textAlign: 'left',
            justifyItems: 'center', 
          }}
        >
          {dealers.map((dealer) => (
            <p key={dealer}>
              <Typography>{dealer}</Typography>
            </p>
          ))}
        </Typography>
        <Typography variant="body1"
        sx={{
            p:3,
        }}>North America Only</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          color: 'black',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1"></Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
