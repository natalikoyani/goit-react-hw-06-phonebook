import { StyledTitle, StyledFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { onFilterChange } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  if (contacts.length === 0 ?? !contacts) {
    return (
      <>
        <StyledTitle>There are no contacts yet!</StyledTitle>
      </>
    );
  }

  return (
    <>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledFilter type="string" name="filter" onChange={(e) => dispatch(onFilterChange(e.target.value))} />
    </>
  );
};
