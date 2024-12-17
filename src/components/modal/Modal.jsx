import { createPortal } from 'react-dom';
import ModalItem from '../modalItem/ModalItem';
import {
	StyledHope,
	StyledModal,
	StyledModalBackground,
	StyledModalTotal,
	StyledOrderButton,
	StyledOrderedItems,
	StyledTotalAmount,
	StyledTotalText,
	StyledVerification,
	StyledVerificationTitle
} from './modal.styles';

const Modal = ({ cart, setCart, totalPrice, setShowModal }) => {
	return createPortal(
		<StyledModalBackground>
			<StyledModal>
				<StyledVerification
					src='/assets/images/icon-order-confirmed.svg'
					alt=''
				/>
				<StyledVerificationTitle>Order Confirmed</StyledVerificationTitle>
				<StyledHope>We hope you enjoy your food!</StyledHope>
				<StyledOrderedItems>
					{cart.map(item => (
						<ModalItem key={item.id} {...item} />
					))}
					<StyledModalTotal>
						<StyledTotalText>Order Total</StyledTotalText>
						<StyledTotalAmount>${totalPrice.toFixed(2)}</StyledTotalAmount>
					</StyledModalTotal>
				</StyledOrderedItems>
				<StyledOrderButton
					onClick={() => {
						setShowModal(false), setCart([]);
					}}
				>
					Start New Order
				</StyledOrderButton>
			</StyledModal>
		</StyledModalBackground>,
		document.getElementById('modal')
	);
};

export default Modal;
