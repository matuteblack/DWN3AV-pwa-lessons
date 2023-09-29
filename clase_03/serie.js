class Serie {
    title  = '';
    year   = '';

    constructor(title, year) {
        this.setTitle(title);
        this.setYear(year);
    }   

    setTitle(title) {
        this.title = title;
    }
    getTitle() {
        return this.title;
    }

    setYear(year) {
        this.year = year;
    }
    getYear() {
        return this.year;
    }
}