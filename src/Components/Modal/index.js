import React from 'react';
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap'

const ModalComponent = ({ descricaoBotaoModal, handleShow, tituloModal, children, onSubmit, show, handleClose }) => {
    return (
        <>
            <Button variant="primary" /* onClick={handleShow} */>
                {descricaoBotaoModal}
            </Button>

            <Modal show={show} /* onHide={handleClose} */>
                <form> {/* onSubmit={onSubmit}> */}
                    <Modal.Header closeButton>
                        <Modal.Title>{tituloModal}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{children}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" /* onClick={handleClose} */>
                            Cancelar
                        </Button>
                        <Button variant="primary" /* onClick={handleClose} */>
                            Salvar
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>

    );
};

export default ModalComponent;
