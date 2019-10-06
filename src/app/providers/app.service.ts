import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

    url: any;
    constructor(private http : Http){
        this.url  = 'https://api.datamuse.com/words?ml=4'
    }

    search_word(term){
        return this.http.get(this.url + term).map(res => {
            return res.json().map(item => {
                return item.word;
            })
        })
    }
}
