export const dateFormat = (date) =>{
return new Date(date).toLocaleString('en-US',{
    weekday:'short',
    month:'long',
    hour:'numeric',
    hour: 'numeric',
    minute:'numeric'
})

}