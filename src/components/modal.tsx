import React from 'react';

interface ModalProps {
    children: React.ReactNode,
    title: string
}

export function Modal( { children, title }: ModalProps) {
    return (
        <>
            <a href="#modal-one" className="btn-modal">Открыть модальное окно</a>
            <div className="modal" id="modal-one" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-header">
                  <h1> {title}</h1>
                        <a href="#close" className="btn-close" aria-hidden="true">×</a>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>


            </div>
        </>
    );
}


