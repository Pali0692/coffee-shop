import { Badge } from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';

const CartWidget = () => {
    return (
        <Badge badgeContent={4} color="primary">
            <ShoppingCartSharpIcon/>
        </Badge>
    );
}

export default CartWidget;