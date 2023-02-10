import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

const Logo = ({ color, stroke, size, onClick }) => {
  return (
    // <Link href={"/"} className={styles.root}>
    <div onClick={onClick}>
      <LightbulbCircleIcon
        sx={{
          color: color,
          fontSize: { xs: size ? 50 : 50, sm: 50 },
          stroke: stroke,
          background: "white",
          borderRadius: "50%",
          strokeWidth: 0.8,
          "&:hover": {
            cursor: "pointer",
            transform: "scale(.98)",
            opacity: 0.9,
          },
        }}
      />
    </div>

    // </Link>
  );
};

export default Logo;
