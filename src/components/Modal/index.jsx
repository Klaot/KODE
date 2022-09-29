import React from 'react';
import styles from './Modal.module.scss';
import CloseModal from '../../assets/img/close-modal.png';
import { useSelector, useDispatch } from 'react-redux';
import { setCheckbox } from '../../store/slices/filterAndSort';
import { setActiveModal } from '../../store/slices/activeModal';

function Modal() {

    const { checkbox } = useSelector(state => state.filter);
    const { isActiveModal } = useSelector(state => state.activeModal);
    const dispatch = useDispatch()
    const checkboxs = ['По алфавиту', 'По дню рождения']

  return (
        <div className={ isActiveModal ? styles.modal : styles.modalActive } onClick={() => dispatch(setActiveModal(true))}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div>
                    <div className={styles.modalButton}>
                       <h1>Сортировка</h1> 
                       <button onClick={() => dispatch(setActiveModal(true))}><img src={CloseModal} alt='CloseModal'/></button>
                    </div>
                    {
                      checkboxs.map((item, index) => {
                        return  <div key={index} onClick={() => dispatch(setCheckbox(index))}  className={styles.modalCheckbox}>
                                    <input type='checkbox' onChange={() => dispatch(setCheckbox(index))} checked={index === checkbox ? true : false}/> 
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