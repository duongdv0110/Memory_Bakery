import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ChiTietDonHangComponent } from './chi-tiet-don-hang/chi-tiet-don-hang.component';
import { QuanLyDonHangComponent } from './quan-ly-don-hang/quan-ly-don-hang.component';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ProductManagementComponent } from './product-management/product-management.component';
import { PromotionManagementComponent } from './promotion-management/promotion-management.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { PromotionDetailComponent } from './promotion-detail/promotion-detail.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { QuanLyDonHangOrderStatusComponent } from './quan-ly-don-hang-order-status/quan-ly-don-hang-order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ChiTietDonHangComponent,
    QuanLyDonHangComponent,
    CustomerManagementComponent,
    ProductManagementComponent,
    PromotionManagementComponent,
    BlogManagementComponent,
    PromotionDetailComponent,
    BlogDetailComponent,
    QuanLyDonHangOrderStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
