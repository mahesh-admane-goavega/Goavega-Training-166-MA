import * as React from "react";
import { Box, styled, Theme } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { useSpring, animated } from "@react-spring/web";
import { AddUser } from "../Forms/AddUser";

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactElement; open: boolean }
>((props, ref) => {
  const { open, ...other } = props;
  return <Fade ref={ref} in={open} {...other} />;
});

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

interface FadeProps {
  children: React.ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = (theme: Theme) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "60%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
  border: "2px solid currentColor",
  boxShadow: 24,
  padding: "16px 32px 24px 32px",
});

export default function SpringModal({ colseHandle, openHandle }: any) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openHandle}
        onClose={colseHandle}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
      >
        <Fade in={openHandle}>
          <Box sx={style}>
            <AddUser />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
