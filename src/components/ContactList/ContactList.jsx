import { nanoid } from 'nanoid';
import { StyledList, StyledButton } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledList>
      {filteredContacts.map(contact => {
        return (
          <li key={nanoid()}>
            {contact.name}: {contact.number}{' '}
            <StyledButton
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </StyledButton>
          </li>
        );
      })}
    </StyledList>
  );
};

