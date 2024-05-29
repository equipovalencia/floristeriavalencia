import { useEffect } from 'react'

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} / Valencia Floristeria`;
    })
    return null
}
