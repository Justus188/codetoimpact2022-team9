// material-ui
import { useTheme } from '@mui/material/styles';
import logo from '../assets/images/GIC_Master_Logo_RGB_Full-Colour.webp';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        <img src={logo} alt="Berry" width="100" />
    );
};

export default Logo;
