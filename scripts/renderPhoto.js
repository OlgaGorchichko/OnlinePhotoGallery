import { createElem } from "./createElem.js";

export const renderPhoto = (photoWrapper, photo) => {
    const photoPicture = createElem('img', {
        className: 'photo__picture',
        src: photo.urls.regular,
        alt: photo.alt_description,
        style: 'max-height: 80vh;'
    });

    const author = createElem('a', {
        className: 'photo__author',
        href: photo.user.html
    });

    const avatarAuthor = createElem('img', {
        src: photo.user.profile_image.medium,
        width: '64',
        height: '64',
        alt: photo.user.bio,
        title: photo.user.name
    });

    const authorName = createElem('span', {
        textContent: photo.user.name
    });

    author.append(avatarAuthor, authorName);

    const photoControl = createElem('div', {
        className: 'photo__control',
    });

    const photoLike = createElem('button', {
        id: photo.id,
        className: 'photo__like',
        textContent: photo.likes
    });

    if(!photoLike.likedByUser) {
        photoLike.classList.add('photo__like_o');
    }

    const photoDownload = createElem('a', {
        className: 'photo__download',
        href: photo.urls.raw,
        download: true,
        target: '_blank'
    });

    photoControl.append(photoLike, photoDownload);

    photoWrapper.append(photoPicture, author, photoControl);
}
