import ModalAlert from "../../atoms/ModalAlerts/ModalAlert";

    export function ConfirmModal({
    title = "Confirmar acción",
    text,
    onConfirm,
    onCancel
    }) {
    return (
        <ModalAlert
        title={title}
        text={text}
        onClose={onCancel} 
        actions={[
            { label: "Confirmar", onClick: onConfirm },
            { label: "Cancelar", onClick: onCancel }
        ]}
        />
    );
    }

    export function InfoModal({
    title = "Información",
    text,
    onClose
    }) {
    return (
        <ModalAlert
        title={title}
        text={text}
        onClose={onClose}   
        actions={[
            { label: "OK", onClick: onClose }
        ]}
        />
    );
    }
