
export default function Toast({ toast }) {

        return (
                <div className={`toast ${toast?.visible ? 'show' : ''}`}>
                        <p className="toast-message">{toast?.message}</p>
                </div>
        )
}