import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-cesar',
  templateUrl: './cesar.component.html',
  styleUrls: ['./cesar.component.scss']
})
export class CesarComponent implements OnInit {

  encryptingWord: string = '';
  decryptingWord: string = '';
  cipheredText = '';
  decipheredText = '';
  shift = 0;
  alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";

  constructor() {
  }

  ngOnInit(): void {
  }

  cipher(text: string, shift: number) {
    this.cipheredText = "";
    for (let x = 0; x < text?.length; x++) {
      for (let y = 0; y < this.alphabet?.length; y++) {
        if (text.charAt(x) === this.alphabet?.charAt(y)) {
          const index = (Number(y) + Number(shift)) % 34;
          this.cipheredText += this.alphabet?.charAt(index);
        }
      }
    }
  }

  decipher(text: string, shift: number) {
    this.decipheredText = "";
    for (let x = 0; x < text?.length; x++) {
      for (let y = 0; y < this.alphabet?.length; y++) {
        if (text.charAt(x) === this.alphabet?.charAt(y)) {
          const index = (Number(y) - Number(shift)) % 34;
          index < 0 ? this.decipheredText += this.alphabet?.charAt(34 + index) : this.decipheredText += this.alphabet?.charAt(index);
        }
      }
    }
  }

}

