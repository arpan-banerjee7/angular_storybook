import { BrowserModule } from "@angular/platform-browser";
import { WelcomeComponent } from "./../app/welcome/welcome.component";
import { LogInComponent } from "./../app/log-in/log-in.component";
import { LoadingSpinnerComponent } from "./../app/shared/loading-spinner.component";
import { AuthService } from "./../app/auth-service/auth.service";
import { SignUpComponent } from "src/app/sign-up/sign-up.component";
import { HttpClientModule } from "@angular/common/http";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { AppRoutingModule } from "src/app/app.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";

//added all the dependencies to load the sign up component
storiesOf("SignUp Component", module)
  .addDecorator(
    moduleMetadata({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
      ],
      declarations: [
        SignUpComponent,
        LoadingSpinnerComponent,
        LogInComponent,
        WelcomeComponent,
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: "/" }],
    })
  )
  .add("default", () => {
    return {
      template: "<app-sign-up></app-sign-up>",
      prop: {},
    };
  });
