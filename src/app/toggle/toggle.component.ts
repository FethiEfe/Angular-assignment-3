import { templateJitUrl } from '@angular/compiler';
import { Component } from "@angular/core"

@Component({
    selector: "app-toggle",
    templateUrl: "./toggle.component.html",
    styles:[`
        .white{
            color:white
        }
    `]
})

export class ToggleComponent{
    showSecret = false
    details = []

    toggleSecret(){
        this.showSecret = !this.showSecret
        this.details.push(new Date())
    }
}