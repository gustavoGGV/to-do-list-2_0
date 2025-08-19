/**
 * This function will toggle the popup's appearance.
 * @param setPopup - React.Dispatch<React.SetStateAction<boolean>>
 * @param popup - boolean
 * @param event - React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
 */ 
export const elementTogglePopup = (
  setPopup: React.Dispatch<React.SetStateAction<boolean>>,
  popup: boolean,
  event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
) => {
  event.preventDefault();
  setPopup(!popup);
};