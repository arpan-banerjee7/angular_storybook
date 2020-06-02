//login component story
import { BrowserModule } from "@angular/platform-browser";
import { WelcomeComponent } from "../app/welcome/welcome.component";
import { LogInComponent } from "../app/log-in/log-in.component";
import { LoadingSpinnerComponent } from "../app/shared/loading-spinner.component";
import { AuthService } from "../app/auth-service/auth.service";
import { SignUpComponent } from "../app/sign-up/sign-up.component";
import { HttpClientModule } from "@angular/common/http";
import { storiesOf, moduleMetadata } from "@storybook/angular";
import { AppRoutingModule } from "../app/app.routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { withA11y } from "@storybook/addon-a11y";

//@ts-ignore
import * as markdown from "./notes/log-in.readme.md";

storiesOf("LogIn Component", module)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule
      ],
      declarations: [
        SignUpComponent,
        LoadingSpinnerComponent,
        LogInComponent,
        WelcomeComponent
      ],
      providers: [AuthService, { provide: APP_BASE_HREF, useValue: "/" }]
    })
  )
  .add(
    "logIn",
    () => {
      return {
        template: "<app-log-in></app-log-in>",
        prop: {}
      };
    },
    { notes: { markdown } }
  );
