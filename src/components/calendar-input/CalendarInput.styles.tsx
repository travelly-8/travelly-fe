import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { styled } from 'styled-components'

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-gray-bright);
`
export const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const DateText = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`

export const StyleCalendar = styled(Calendar)`
  max-width: 100%;
  border: none;
  margin-bottom: 1.5rem;

  abbr {
    text-decoration-line: none;
  }

  .react-calendar__navigation {
    display: inline-flex;
    gap: 2rem;
    height: 2.4rem;
    margin-bottom: 1em;
  }

  .react-calendar__navigation__label {
    font-size: 1.2rem;
    font-weight: normal;
  }

  .react-calendar__navigation button {
    min-width: 2.4rem;
    background-color: transparent;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: transparent;
  }

  .react-calendar__navigation__prev-button {
    background: url('/src/assets/browsing/previous.svg') no-repeat center;
    color: transparent;
  }

  .react-calendar__navigation__next-button {
    background: url('/src/assets/browsing/next.svg') no-repeat center;
    color: transparent;
  }

  .react-calendar__navigation button:disabled {
    background-color: #e8e8e8;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  .react-calendar__month-view__weekdays__weekday--weekend {
    font-size: 1.2rem;
    color: var(--color-gray-middle);
  }

  .react-calendar__month-view__days__day--weekend {
    font-size: 1.2rem;
    color: var(--color-gray-middle);
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.2em 0.5em;
  }

  .react-calendar__tile--now {
    background: #d7d1ff;
    border-radius: 0.4rem;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: var(--color-main);
    border-radius: 5px;
    font-weight: 700;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: var(--color-main);
  }

  .react-calendar__tile--active {
    color: #ffffff;
    background-color: var(--color-main);
    border-radius: 7px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: var(--color-main);
  }
`
