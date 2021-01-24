export const extend = (a, b) => ({ ...a, ...b });

export const helperForTranslate = (value) => {
    switch (value) {
        case 'Резерв':
            return 'Reserve';
        case 'Поиск на месте':
            return 'Local search';
        case 'Стоп. Проверка информации':
            return 'Stop. Information verification';
        case 'Архив':
            return 'Archive';
    }
}

export const mockFunction = () => {
    // do nothing
};
