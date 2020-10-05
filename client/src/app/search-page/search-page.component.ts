import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NamesSandbox } from '../core/names/names.sandbox';
import { AuthSandbox } from '../core/auth/auth.sandbox';
import { LabelSandbox } from '../core/label/label.sandbox';
import { ModalService } from 'angular-modal-library';

@Component({
    selector: 'app-search-page',
    templateUrl: './search-page.component.html',
    styleUrls: ['./search-page.component.sass']
})
export class SearchPageComponent implements OnInit, OnDestroy {

    public user;

    public searchForm: FormGroup;
    public keywordControl: FormControl;
    public showAllNames: FormControl;
    public limitControl: FormControl;
    public offsetControl: FormControl;

    // modal create form
    public modalFormCreate: FormGroup;
    public modalFormCreateName: FormControl;
    public modalFromCreateNamePlaceholder: string;

    // por derecho
    keyword = '';
    limit = '10';
    offset = '';
    hided = false;

    private subscriptions: Subscription[] = [];

    ALL_NAMES;
    BUTTON_STATUS = [];
    NEW_LABEL = [];

    LETTERS = ['А', 'Б', 'В', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'M', 'Н', 'O', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

    page = 1;

    pageLabel = 1;

    titleKeyword = '';
    titleCount = 0;
    titleMode = 'find';

    MODE_CLEAN = 'clean';
    MODE_ADD = 'add';

    constructor(
        public namesSandbox: NamesSandbox,
        public authSandbox: AuthSandbox,
        public labelSandbox: LabelSandbox,
        public formBuilder: FormBuilder,
        public modal: ModalService
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem('label')) {
            this.NEW_LABEL = JSON.parse(localStorage.getItem('label'));
        }
        if (localStorage.getItem('title_mode')) {
            this.titleKeyword = localStorage.getItem('title_mode') === 'letter' ? localStorage.getItem('letter') : localStorage.getItem('title_mode') === 'keyword' ? localStorage.getItem('keyword') : '';
            this.titleMode = localStorage.getItem('title_mode') === 'letter' ? 'letter' : localStorage.getItem('title_mode') === 'keyword' ? 'find' : '';
            this.modalFromCreateNamePlaceholder = localStorage.getItem('title_mode') === 'letter'
                                                    ? 'All result with letter ' + localStorage.getItem('letter')
                                                    : localStorage.getItem('title_mode') === 'keyword'
                                                    ? 'All result with keyword ' + localStorage.getItem('keyword') : '';
        }
        this.authSandbox.getUserData();
        this.initForm();
        this.initModalCreateForm();
        this.subscriptions.push(this.namesSandbox.getAllNames$.subscribe(data => {
            if (data) {
                this.BUTTON_STATUS = [];
                this.ALL_NAMES = data;
                this.ALL_NAMES = this.ALL_NAMES.names;
                if (this.ALL_NAMES) {
                    this.ALL_NAMES.forEach(name => {
                        this.BUTTON_STATUS.push({id: name.id, hideButtonStatus: name.hide, addButtonStatus: false});
                    });

                    if (this.NEW_LABEL.length !== 0) {
                        this.NEW_LABEL.forEach(name => {
                            const candidate = this.BUTTON_STATUS.find(elem => elem.id === name.id);
                            if (candidate) {
                                this.BUTTON_STATUS[this.BUTTON_STATUS.indexOf(candidate)].addButtonStatus = true;
                            }
                            // console.log(this.BUTTON_STATUS.indexOf(candidate));
                        });
                    }
                    // console.log(this.NEW_LABEL);
                    this.titleCount = this.ALL_NAMES.length;
                }
            }
        }));
        this.subscriptions.push(this.authSandbox.getUserData$.subscribe(data => {
            if (data) {
                this.user = data;
            }
        }));
        // this.subscriptions.push(this.keywordControl.valueChanges.subscribe(value => this.keyword = value));
        //   this.subscriptions.push(this.keywordControl.valueChanges.subscribe(value => {
        //     if (value.length >= 2) {
        //         this.keyword = value;
        //         this.getAllNames();
        //     }
        //   }));
        //   this.subscriptions.push(this.offsetControl.valueChanges.subscribe(value => {
        //       if (value) {
        //           this.offset = value;
        //           this.getAllNames();
        //       }
        //   }));
    }

    ngOnDestroy(): void {
      this.subscriptions.map(sub => sub.unsubscribe());
    }

    private initForm(): void {
        this.keywordControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
        this.showAllNames = new FormControl(false),
        this.limitControl = new FormControl('');
        this.offsetControl = new FormControl('');

        this.searchForm = this.formBuilder.group({
            keyword: this.keywordControl,
            showAllNames: this.showAllNames,
            offset: this.offsetControl,
            limit: this.limitControl
        });
    }

    private initModalCreateForm(): void {
        this.modalFormCreateName = new FormControl('');

        this.modalFormCreate = this.formBuilder.group({
            name: this.modalFormCreateName
        });
    }

    public triggerShowAllNames(): void {
        this.hided = !this.showAllNames.value;
    }

    public showName(name) {
        this.namesSandbox.editName({id: name.id, hide: false});
        this.BUTTON_STATUS[this.ALL_NAMES.indexOf(name)].hideButtonStatus = false;
    }

    public hideName(name) {
        this.namesSandbox.editName({id: name.id, hide: true});
        this.BUTTON_STATUS[this.ALL_NAMES.indexOf(name)].hideButtonStatus = true;
    }

    public addToNewLabel(name) {
        this.NEW_LABEL.push(name);
        this.BUTTON_STATUS.forEach(status => {
            if (status.id === name.id) {
                status.addButtonStatus = true;
            }
        });
        this.updateStorage();
        // console.log(this.BUTTON_STATUS);
    }

    public deleteToNewLabel(name) {
        this.NEW_LABEL.splice(this.NEW_LABEL.indexOf(name), 1);
        this.BUTTON_STATUS.forEach(status => {
            if (status.id === name.id) {
                status.addButtonStatus = false;
            }
        });
        this.updateStorage();
    }

    public addTodoToNewLabel() {
        if (this.ALL_NAMES.length !== 0) {
            if (this.NEW_LABEL.length !== 0) {
                this.modal.open('modal-added-label');
            } else {
                this.NEW_LABEL = [];
                this.ALL_NAMES.forEach(name => this.addToNewLabel(name));
                this.updateStorage();
                this.MODE_CLEAN = 'clean';
                this.MODE_ADD = 'add';
                this.modal.open('modal-create-label');
            }
        }
    }

    public deleteTodoToNewLabel() {
        this.NEW_LABEL = [];
        this.BUTTON_STATUS.map(status => status.addButtonStatus = false);
        this.updateStorage();
    }

    private updateStorage() {
        localStorage.setItem('label', JSON.stringify(this.NEW_LABEL));
    }

    // public getAllNames(keyword = this.keyword, limit = this.limit, offset = this.offset, hided = this.hided) {
    //     const params: any = {};
    //     params.keyword = keyword;
    //     params.limit = limit;
    //     params.offset = offset;
    //     if (this.user.permission === 'root' || this.user.permission === 'admin') {
    //         params.hided = hided;
    //     }
    //     console.log(params);
    //     this.namesSandbox.getAllNames(params);
    // }

    public onSubmitModalCreateForm() {
        const params: any = {};
        params.name = this.modalFormCreateName.value.length === 0 ? this.modalFromCreateNamePlaceholder : this.modalFormCreateName.value;
        params.ids = this.NEW_LABEL.map(name => name.id).join(',');
        this.labelSandbox.addLabel(params);
        this.labelSandbox.addLabelLoaded$.subscribe(data => {
            if (data) {
                this.modal.close('modal-create-label');
                this.NEW_LABEL = [];
                this.BUTTON_STATUS.forEach(status => status.addButtonStatus = false);
                this.updateStorage();
            }
        });
    }

    public onSubmit(letter = '') {
        const params: any = {};
        params.keyword = this.keywordControl.value ? this.keywordControl.value : '';
        params.limit = this.limitControl.value ? this.limitControl.value : '';
        params.offset = this.offsetControl.value ? this.offsetControl.value : '';
        params.letter = letter || '';
        params.minQuantity = '10000';
        if (this.user.permission === 'root' || this.user.permission === 'admin') {
            params.hided = !this.showAllNames.value;
        }
        if (letter !== '') {
            this.titleMode = 'letter';
            this.titleKeyword = letter;
            localStorage.setItem('letter', letter);
            localStorage.setItem('title_mode', 'letter');
        } else {
            this.titleMode = 'find';
            this.titleKeyword = params.keyword;
            localStorage.setItem('keyword', params.keyword);
            localStorage.setItem('title_mode', 'keyword');
        }
        this.namesSandbox.getAllNames(params);
        if (localStorage.getItem('title_mode')) {
            this.modalFromCreateNamePlaceholder = localStorage.getItem('title_mode') === 'letter'
                                                    ? 'All result with letter ' + localStorage.getItem('letter')
                                                    : localStorage.getItem('title_mode') === 'keyword'
                                                    ? 'All result with keyword ' + localStorage.getItem('keyword') : '';
        }
    }

}
