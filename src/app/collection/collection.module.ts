import { NgModule } from '@angular/core';
import { CollectionComponent } from './collection.component';
import { RatingCategoryPipe } from '../pipes/rating-category.pipe';
import { RatingComponent } from '../rating/rating.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { NewBookComponent } from '../new-book/new-book.component';
import { BookGuardService } from '../guards/book-guard.service';
import { DataService } from '../services/data.service';
import { CollectionRoutingModule } from './collection.routing.module';
import { MatListModule, MatTabsModule, MatSnackBarModule, MatDialogModule, MatCardModule, MatIconModule, MatSlideToggleModule, MatButtonModule, MatLineModule, MatInputModule, MatToolbarModule } from '@angular/material';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule }from '@angular/http';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        CollectionRoutingModule,
        MatListModule,
        MatTabsModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatLineModule,
        MatInputModule,
        MatToolbarModule,
    ],
    entryComponents: [
        NewBookComponent
    ],
    declarations: [
        CollectionComponent,
        RatingComponent,
        BookDetailComponent,
        NewBookComponent,
        RatingCategoryPipe
    ],
    providers: [
        BookGuardService, 
        DataService]
})
export class CollectionModule { }