import React from 'react';
import styles from './Modal.module.scss';
import CloseModal from '../../assets/img/close-modal.png'

function Modal({check, setCheck, isActiveModal, setIsActiveModal}) {

    const checkboxs = ['По алфавиту', 'По дню рождения']

  return (
        <div className={ isActiveModal ? styles.modal : styles.modalActive } onClick={() => setIsActiveModal(true)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div>
                    <div className={styles.modalButton}>
                       <h1>Сортировка</h1> 
                       <button onClick={() => setIsActiveModal(true)}><img src={CloseModal} alt='CloseModal'/></button>
                    </div>
                    {
                        checkboxs.map((item, index) => {
                            return  <div key={index} onClick={() => setCheck(index)}  className={styles.modalCheckbox}>
                                        <input type='checkbox' onChange={() => setCheck(index)} checked={index === check ? true : false}/> 
                                        <h3>{item}</h3>
                                    </div>
                         })
                    }
                </div>
               
            </div>
            
        </div>
  )
}

export default Modal