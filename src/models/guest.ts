export interface GuestPhotoType {
  id: number,
  photo_path: string
}

export class Guest {
  id: number
  name: string
  message: string
  guest_photos: GuestPhotoType[]

  constructor(props: {
    id: number,
    name: string,
    message: string,
    guestPhotos: GuestPhotoType[]
  }) {
    this.id = props.id;
    this.message = props.message;
    this.name = props.name;
    this.guest_photos = props.guestPhotos
  }
}
