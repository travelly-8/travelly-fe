import { useEffect, useState } from 'react'
import { FieldErrors } from 'react-hook-form'

export const useFormValidation = (
  fields: any,
  errors: FieldErrors,
  isValid: boolean,
  extraConditions: boolean[],
) => {
  const [allInputsFilled, setAllInputsFilled] = useState(false)

  useEffect(() => {
    const checkInputs = () => {
      return (
        Object.values(fields).every((field) => !!field) &&
        Object.values(errors).length === 0 &&
        isValid &&
        extraConditions.every((condition) => condition)
      )
    }

    setAllInputsFilled(checkInputs())
  }, [fields, errors, isValid, ...extraConditions])

  return allInputsFilled
}
