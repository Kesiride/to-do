import { NgModule } from "@angular/core";
import { MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material";

const MaterialComponents = [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
]

@NgModule({
    declarations: [],
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})

export class MaterialModule{}
